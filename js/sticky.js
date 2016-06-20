$(document).ready(function(event) {
	var mymenutop = $('.site-header').offset().top; 

	$(window).scroll(function() {

		if (mymenutop <= $(window).scrollTop()) $('.site-header').addClass("sticked");
		else $('.site-header').removeClass("sticked");

	});

});

