window.onscroll = function() {move()};

var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;

function move() {
		navbar.classList.remove("sticky");
		document.getElementById("nav").style.margin = "-4rem auto 0 auto";
		document.getElementById("nav").style.zIndex = "2";
		document.getElementById("nav").style.position = "relative";
		$("nav").css('background', 'rgba(255, 255, 255, 0.175)');
		
  if (window.innerWidth > 736) {
	  if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
		document.getElementById("nav").style.margin = "auto";
		document.getElementById("nav").style.zIndex = "3";
		document.getElementById("nav").style.position = "fixed";
		$("nav").css('background', 'rgba(42, 41, 68, 1)');
		$("nav").css('background', 'rgba(42, 34, 60, 1)');
	  } 
  }	  
}