function gotoHeader() {
	window.scrollTo(0, $(window).scrollTop() - -document.getElementById("header").getBoundingClientRect().top);
	document.getElementById("bod").classList.remove("is-navPanel-visible");
}