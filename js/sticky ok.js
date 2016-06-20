$(document).ready(function(event) {
	console.log("Allo ? ");

// Create a clone of the menu, right next to original.
$('.site-header').addClass('original').clone().insertAfter('.site-header').addClass('cloned').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);

/*$(window).scroll(function() {
	var mymenutop = $('.site-header').offset().top; 
console.log("Coucou");
console.log(mymenutop + " " + $('.site-header').offset().top);
	if (mymenutop > $(window).scrollTop())
		console.log("Yeah");

});*/


function stickIt() {

  var orgElementPos = $('.original').offset();
  orgElementTop = orgElementPos.top;               

  console.log(orgElementTop + " " + $(window).scrollTop());

  if ($(window).scrollTop() >= (orgElementTop)) {
    // scrolled past the original position; now only show the cloned, sticky element.

    // Cloned element should always have same left position and width as original element.     
    orgElement = $('.original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;  
    widthOrgElement = orgElement.css('width');
    $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
    $('.original').css('visibility','hidden');
  } else {
    // not scrolled past the menu; only show the original menu.
    $('.cloned').hide();
    $('.original').css('visibility','visible');
  }
}

})

