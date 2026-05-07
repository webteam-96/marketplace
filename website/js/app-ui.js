
$(document).ready(function () {
    let winWidth = $(window).width();

    if (winWidth < 1024) {
        $('body').stop().toggleClass('menu_toggle');
    }
    if (winWidth < 768) {
        $('.page_header').prepend('<i class="fa-solid fa-ellipsis-vertical"></i>');
    }


    $('#toggleSidebar').click(function () {
        $('body').stop().toggleClass('menu_toggle');
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        mouseDrag:true,
        touchDrag:true, 
        lazyLoad:true,
        autoplay:true,
         loop:true,
         stagePadding:(15,15),
        margin:30,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false,
               
            }
        }
    })
});

