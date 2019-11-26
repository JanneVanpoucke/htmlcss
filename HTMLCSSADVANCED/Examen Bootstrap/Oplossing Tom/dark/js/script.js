$(document).ready(function() {
  
    var scrollLink = $('.navbar-nav .nav-link'); //bootstrap nav-link class.
    
    // Smooth scrolling
    scrollLink.click(function(e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000 );
    });

});