$(document).ready(function(){
    
    if ($(window).scrollTop() >= 80) {
        
      $('.navbar').addClass('scrolled-nav');
        
        if($('.nav-link, .navbar-brand').removeClass('text-dark')){
          $('.nav-link, .navbar-brand').addClass('text-light');

          $('.nav-item').removeClass('nav-custom-hover-dark');
          $('.nav-item').addClass('nav-custom-hover-light');
        }
        
        if($('.navbar-toggler').removeClass('navbar-light')){
          $('.navbar-toggler').addClass('navbar-dark');

          $('.nav-item').removeClass('nav-custom-hover-light');
          $('.nav-item').addClass('nav-custom-hover-dark');
        }
      } else if (scrollTop < 80) {
        $('.navbar').removeClass('scrolled-nav');
      }
    
    var scrollTop = 0;
    $(window).scroll(function(){
      scrollTop = $(window).scrollTop();
      
      if (scrollTop >= 80) {
        $('.navbar').addClass('scrolled-nav');
        $('.nav-logo').addClass('scrolled-nav-logo');
        if($('.nav-link, .navbar-brand').removeClass('text-dark')){
          $('.nav-link, .navbar-brand').addClass('text-light');
        }

        if($('.navbar-toggler').removeClass('navbar-light')){
          $('.navbar-toggler').addClass('navbar-dark');
          
          $('.nav-item').removeClass('nav-custom-hover-light');
          $('.nav-item').addClass('nav-custom-hover-dark');
        }


      } else if (scrollTop < 80) {
        
        $('.navbar').removeClass('scrolled-nav');
        $('.nav-logo').removeClass('scrolled-nav-logo');
        if($('.nav-link, .navbar-brand').removeClass('text-light')){
          $('.nav-link, .navbar-brand').addClass('text-dark');

          $('.nav-item').removeClass('nav-custom-hover-light');
          $('.nav-item').addClass('nav-custom-hover-dark');
        }

        if($('.navbar-toggler').removeClass('navbar-dark')){
          $('.navbar-toggler').addClass('navbar-light');

          $('.nav-item').removeClass('nav-custom-hover-dark');
          $('.nav-item').addClass('nav-custom-hover-light');
        }
      } 
      
    });    
});