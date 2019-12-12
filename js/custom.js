$(document).ready(function(){
    
    if ($(window).scrollTop() >= 80) {
        
      $('.navbar').addClass('scrolled-nav');
        
        if($('.nav-link, .navbar-brand').removeClass('text-dark')){
          $('.nav-link, .navbar-brand').addClass('text-light');
        }
        
        if($('.navbar-toggler').removeClass('navbar-light')){
          $('.navbar-toggler').addClass('navbar-dark');
        }
      } else if (scrollTop < 80) {
        $('.navbar').removeClass('scrolled-nav');
      }
    
    var scrollTop = 0;
    $(window).scroll(function(){
      scrollTop = $(window).scrollTop();
       $('.counter').html(scrollTop);
      
      if (scrollTop >= 80) {
        $('.navbar').addClass('scrolled-nav');
        
        if($('.nav-link, .navbar-brand').removeClass('text-dark')){
          $('.nav-link, .navbar-brand').addClass('text-light');
        }

        if($('.navbar-toggler').removeClass('navbar-light')){
          $('.navbar-toggler').addClass('navbar-dark');
        }


      } else if (scrollTop < 80) {
        
        $('.navbar').removeClass('scrolled-nav');
        
        if($('.nav-link, .navbar-brand').removeClass('text-light')){
          $('.nav-link, .navbar-brand').addClass('text-dark');
        }

        if($('.navbar-toggler').removeClass('navbar-dark')){
          $('.navbar-toggler').addClass('navbar-light');
        }
      } 
      
    });    
});