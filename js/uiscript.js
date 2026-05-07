jQuery.noConflict();
jQuery(document).ready(function(){
    var winH = jQuery(window).height();
    jQuery("#preloader").fadeOut(500);  
jQuery('.main-header').load('header.htm')
jQuery('.footer').load('footer.htm')


jQuery('.modules .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    autoplay:true,
    autoHeight:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsiveClass:true,
    items:1, 
    animateOut: 'animate__slideOutUp animate__faster',
    animateIn: 'animate__slideInUp animate__faster'
    
});

 
 

  jQuery('#clubSites').owlCarousel({
    lazyContent:true,
    loop:true,
    margin:10,
    dots:false,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1
        },
        1000:{
            items:1
             
        }
    }
});


jQuery('#testimonial').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    autoplay:true,
    autoHeight:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsiveClass:true,
    nav: true,
    navText: ["<i class='fal fa-chevron-left'></i>","<i class='fal fa-chevron-right'></i>"],
    responsive:{
        0:{
            items:1,
            dots:true
        },
        600:{
            items:1,
            dots:false
        },
        1000:{
            items:1,
            dots:true
           
            
        }
    }
});


// jQuery('.buy-button').click(function(e){
 
//     var getUrl = jQuery(this).attr('href');
//  alert(getUrl)
//     var iframe = jQuery('<iframe id="ifrm" src="'+getUrl+'" height="'+winH+'" width="100%" border="0"></iframe>');
//     var pgTitle = jQuery('.main-nav').find('.nav-link.active').text();
 
// jQuery('#websitePopup').find('.modal-title').html(pgTitle);
// jQuery('#websitePopup').find('.modal-body').html(iframe);
// jQuery('#websitePopup').modal('show');

// e.preventDefault();

// });

jQuery('#clubSites').find('.item').children('a').click(function(e){
    
    e.preventDefault();
  
       
        var getUrl = jQuery(this).attr('href');
        var iframe = jQuery('<iframe id="ifrm" src="'+getUrl+'" height="'+winH+'" width="100%" border="0"></iframe>');
        var clubName = jQuery(this).find('.clubName').text();
    jQuery('#websitePopup').find('.modal-title').html(clubName);
    jQuery('#websitePopup').find('.modal-body').html(iframe);
    jQuery('#websitePopup').modal('show');


 

    // var isTimeout;
    // var isLoaded;
  
    // function success() {
    //   if (isTimeout) {
    //     return;
    //   }
    //   jQuery('#loading').hide();
    //   jQuery('#ifrm').show();
    //   isLoaded = true;
    // };
  
    // setTimeout(function() {
    //   if (isLoaded) {
    //     return;
    //   }
    //   jQuery('#loading').hide();
    //   jQuery('#ifrm').hide();
    // //  jQuery('#error').show();
    //   isTimeout = true;
    // }, 5000);

    // success()
});

// tickerText(contents, keep, seconds, delay = 20, iterations = 0, ratio, secondsout, dev = false, pausetarget, stoptarget);
 

// var Typed = new Typed('.typingEffect',{strings: ['Some strings without', 'Some HTML', 'Chars'],
// typeSpeed: 0,
// backSpeed: 0,
// attr: 'placeholder',
// bindInputFocusEvents: true,
// loop: true
// });



// var typed = new Typed('.typingEffect', {
//   stringsElement: '.strings',
//   typeSpeed: 40,
//   backSpeed: 50,
//   startDelay: 5000,
//   loop: false,
//   loopCount: Infinity
// });

// var typed = new Typed('.typingEffect2', {
//   stringsElement: '.strings2',
//   typeSpeed: 50,
//   backSpeed: 50,
//   startDelay: 2000,
//   loop: false,
//   loopCount: Infinity
// });
 
  // jQuery(".typeStaticWebsite").typeWrite({
  //   speed:50,
  //   cursor: true, 
  //   interval: 1000
  // });
 
  // jQuery(".typingEffect").typeWrite({
  //   speed:50,
  //   cursor: true, 
  //   interval: 1000
  // });
 


 
 

 
  
// 	var winH = jQuery(window).height();
// 	var winW = jQuery(window).width();
// 	var topHeader = jQuery('.top-bar-two').height() + jQuery('.main-nav').height();
// 	jQuery('.mouse-btn-down').click(function(){
// 		jQuery('html,body').animate({
// 			scrollTop: winH - topHeader
// 		});
// 		//alert(winH);
// 	});

	 
// jQuery(window).scroll(function(event){

// 	var st = jQuery(this).scrollTop();

// 	if (winW >= 992) {

// 	 if (st > 200){
// 		   jQuery('.top-bar').slideUp();
// 		   jQuery('header').addClass('minHeader')
// 		   } else {
// 			   jQuery('.top-bar').slideDown('fast');
// 			   jQuery('header').removeClass('minHeader')
// 		 }
// 	}
  
  
// });
 


});