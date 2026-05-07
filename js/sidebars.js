/* global bootstrap: false */
(function() {
    'use strict'
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach(function(tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl)
    })
})()

 
 
$(document).ready(function() {

   $('#buybuttonclick').click(function(){
    alert('sdf')
    $('#buybutton').find('a').click();
   });

    $.getJSON('js/websites.json', function(data){
       // var weblink = '';

        $.each(data, function(key, value){
           var weblink = value.link;
           var weburl = value.url;
           var webName = value.webname;

      
 //$('#clubSites').prepend('<div class="item"><a href="'+ weblink +'" target="_blank"><img src="'+weburl+'" alt="Rotary club website"><small class="clubName text-white d-block text-center">'+webName+'</small></a></div>');
        });


        
$('#clubSites').owlCarousel({
    lazyContent:true,
    loop:true,
    margin:10,dots:true,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            dots:true
        },
        600:{
            items:3,
            dots:false
        },
        1000:{
            items:4,
            dots:true
             
        }
    }
});

      
    });



$('.footer').load('footer.htm');

$("#preloader").fadeOut(1000);  


    $('#toggleMenu').click(function() {
        if ($(this).is(':checked')) {
            $('.moveTop').stop().addClass('menuToggle');
            $('.toggleMenu ').addClass('fa-times');
            $('.toggleMenu ').removeClass('fa-bars');
        } else {
            $('.moveTop').stop().removeClass('menuToggle');
            $('.toggleMenu ').removeClass('fa-times');
            $('.toggleMenu ').addClass('fa-bars');
        }
    });


    // // $(".zoomImg").fullScreenPopup({
    // //   //bgColor: '#e67e22'
    // //   animationSpeed: 200

    // });
    
 
    var moduleLink = $('.main-content .modules .nav-link');
    var page = $('.module-page');
    var closeBtn = $('#close');

    moduleLink.click(function() {
        if($('#toggleMenu').is(':checked')){
            $('#toggleMenu').click();
        }
      

        moduleLink.removeClass('active');
        $(this).addClass('active');

        var PageId = $(this).attr('href');

        //page.hide().addClass('animate__animated animate__slideInRight').removeClass('animate__slideInLeft');
        page.hide();
        $('#mainHome').find('.market-title-holder').hide();
        $('#mainHome').find('.footer ').hide();

        //$(PageId).show().addClass('animate__animated animate__slideInLeft').removeClass('animate__slideInRight'); 
        $(PageId).fadeIn();

        //alert('asdf')
        $('.modules').addClass('moveTop');
        closeBtn.fadeIn();

        $('.top-header').addClass('left-logo');


    });

    $('.main-content .moveTop .nav-link').click(function() {
        $('.toggleMenu ').removeClass('fa-times');
            $('.toggleMenu ').addClass('fa-bars');
    });

    closeBtn.click(function() {
        $(this).hide();
        $('.modules').removeClass('moveTop');
        $('.top-header').removeClass('left-logo');
        page.hide();
         
        $('#mainHome').find('.market-title-holder').fadeIn();
        $('#mainHome').find('.footer ').fadeIn();

    });

var $container = $("#popup_container");

$container.click(function(e) {
    if (e.target.id == $container.attr("id")) {
    $('.modules').stop().removeClass('menuToggle');
  }
});
 
$('.zoomImg').click(function(){

var zoomImgPath = $(this).attr('src');
 

$('#zoomImgModal').find('#modalImg').html('<img src="'+zoomImgPath+'" />')

$('#zoomImgModal').modal('show');
 
});


var delay = 0;

for(var i = 0; i<=5; i++){

    setTimeout(function(){
        $('#productimage').addClass('step' + (i+1));
    },delay);

    delay += 2500;
}


$('#testimonial').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    autoplay:true,
    autoHeight:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsiveClass:true,

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

 
 

});