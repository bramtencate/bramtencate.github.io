window.onscroll = function() {move()};

var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;

function move() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
	$("nav").css('background', 'rgba(42, 41, 68, 1)');
  } else {
    navbar.classList.remove("sticky");
    $("nav").css('background', 'rgba(255, 255, 255, 0.175)');
  }
}