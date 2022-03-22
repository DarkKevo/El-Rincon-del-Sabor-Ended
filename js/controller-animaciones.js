$(document).ready(function () {
   $(window).scroll(function () { 
       if($(window).scrollTop()>$(".about-me").offset().top-$('.about-me').height()){
        $('#about_img').addClass('animateImg');
        $('.about2 #about_img').addClass('animateImg2');
    }else{
           $('#about_img').removeClass('animateImg');
           $('.about2 #about_img').removeClass('animateImg2');
       }
   }); 
   $(window).scroll(function () { 
       if($(window).scrollTop()>$(".delivery").offset().top - $('.delivery').height()){
        $('.img-delivery img').addClass('animateImg');
       }else{

           $('.img-delivery img').removeClass('animateImg');
       }
   });
});