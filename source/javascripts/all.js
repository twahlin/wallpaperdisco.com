//= require_tree .
// wait for the DOM to be loaded 
$(document).ready(function() { 

    //image swapping
    $('.reveal-truth-instagram').click(function() {
      $('.frame-instagram').toggleClass('frame-instagram-truth');
	  return false;
    });
    $('.reveal-truth-facebook').click(function() {
      $('.frame-facebook').toggleClass('frame-facebook-truth');
	  return false;
    });
    $('.reveal-truth-linkedin').click(function() {
      $('.frame-linkedin').toggleClass('frame-linkedin-truth');
	  return false;
    });
		
	  //smooth scrolling
		$(function() {
		  $('a[href*=#]:not([href=#])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html,body').animate({
		          scrollTop: target.offset().top
		        }, 1000);
		        return false;
		      }
		    }
		  });
		});
		
}); 