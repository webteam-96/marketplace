"""
Compose two website screenshots into the dual-browser tilted layout used
across the marquee, matching the visual style of images/websites/01.png.

Usage (single pair):
    python compose_website.py home.png projects.png <slug>

Usage (batch — reads pairs from a folder where each club has
home_<slug>.png and projects_<slug>.png):
    python compose_website.py --batch raw_screenshots/

Output:
    images/websites/<slug>.png  (transparent PNG, ~ 650x540)
"""

import sys
import os
import argparse
from PIL import Image, ImageFilter, ImageDraw

# -------- tuning knobs --------------------------------------------------
CANVAS_W, CANVAS_H = 650, 540       # output canvas size
BROWSER_W = 460                     # rendered width of each browser screenshot
CORNER_RADIUS = 14                  # rounded-corner radius on each shot
SHADOW_OFFSET = (0, 14)
SHADOW_BLUR = 22
SHADOW_OPACITY = 110                # 0-255

# back shot (projects page) — sits behind, tilted clockwise, offset right+down
BACK_ANGLE = 6.5
BACK_POS = (165, 130)               # top-left of bounding box on canvas

# front shot (home page) — tilted counter-clockwise, offset left+up
FRONT_ANGLE = -4.5
FRONT_POS = (15, 30)
# ------------------------------------------------------------------------


def rounded(img: Image.Image, radius: int) -> Image.Image:
    """Apply rounded corners by masking alpha."""
    img = img.convert("RGBA")
    mask = Image.new("L", img.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle(
        (0, 0, img.size[0], img.size[1]), radius=radius, fill=255
    )
    out = Image.new("RGBA", img.size, (0, 0, 0, 0))
    out.paste(img, (0, 0), mask)
    return out


def resize_screenshot(img: Image.Image, width: int) -> Image.Image:
    """Resize preserving aspect ratio to a target width."""
    w, h = img.size
    new_h = int(h * (width / w))
    return img.resize((width, new_h), Image.LANCZOS)


def drop_shadow(img: Image.Image) -> Image.Image:
    """Build a shadow version of img (rgba), blurred and offset."""
    alpha = img.split()[-1]
    shadow = Image.new("RGBA", img.size, (15, 24, 38, 0))
    shadow.putalpha(alpha.point(lambda p: SHADOW_OPACITY if p > 0 else 0))
    return shadow.filter(ImageFilter.GaussianBlur(SHADOW_BLUR))


def tilt(img: Image.Image, angle: float) -> Image.Image:
    """Rotate around its own center with transparent fill, expand canvas."""
    return img.rotate(angle, resample=Image.BICUBIC, expand=True)


def paste_with_shadow(canvas: Image.Image, layer: Image.Image, pos: tuple):
    """Drop a shadow first, then the layer itself, onto canvas."""
    sh = drop_shadow(layer)
    sx, sy = pos[0] + SHADOW_OFFSET[0], pos[1] + SHADOW_OFFSET[1]
    canvas.alpha_composite(sh, (sx, sy))
    canvas.alpha_composite(layer, pos)


def compose(home_path: str, projects_path: str, out_path: str):
    home = Image.open(home_path).convert("RGBA")
    proj = Image.open(projects_path).convert("RGBA")

    home = resize_screenshot(home, BROWSER_W)
    proj = resize_screenshot(proj, BROWSER_W)

    home = rounded(home, CORNER_RADIUS)
    proj = rounded(proj, CORNER_RADIUS)

    home_tilt = tilt(home, FRONT_ANGLE)
    proj_tilt = tilt(proj, BACK_ANGLE)

    canvas = Image.new("RGBA", (CANVAS_W, CANVAS_H), (0, 0, 0, 0))

    # back first (projects), then front (home) on top
    paste_with_shadow(canvas, proj_tilt, BACK_POS)
    paste_with_shadow(canvas, home_tilt, FRONT_POS)

    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    canvas.save(out_path, "PNG", optimize=True)
    print(f"  -> wrote {out_path}  ({canvas.size[0]}x{canvas.size[1]})")


def batch(folder: str):
    """Process every home_<slug>.png + projects_<slug>.png pair in folder."""
    files = os.listdir(folder)
    homes = {
        f[5:-4]: os.path.join(folder, f)
        for f in files
        if f.startswith("home_") and f.lower().endswith(".png")
    }
    projs = {
        f[9:-4]: os.path.join(folder, f)
        for f in files
        if f.startswith("projects_") and f.lower().endswith(".png")
    }
    common = sorted(set(homes) & set(projs))
    if not common:
        print(f"No matching home_<slug>.png + projects_<slug>.png pairs in {folder}")
        return
    print(f"Found {len(common)} pairs:")
    for slug in common:
        out = os.path.join("images", "websites", f"{slug}.png")
        print(f"- {slug}")
        compose(homes[slug], projs[slug], out)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("home", nargs="?", help="home page screenshot")
    ap.add_argument("projects", nargs="?", help="projects page screenshot")
    ap.add_argument("slug", nargs="?", help="output slug (no extension)")
    ap.add_argument("--batch", help="folder containing home_<slug>.png / projects_<slug>.png pairs")
    args = ap.parse_args()

    if args.batch:
        batch(args.batch)
        return
    if not (args.home and args.projects and args.slug):
        ap.print_help()
        sys.exit(1)
    out = os.path.join("images", "websites", f"{args.slug}.png")
    compose(args.home, args.projects, out)


if __name__ == "__main__":
    main()
