window.addEventListener('resize', shieldDistChange);

function shieldDistChange() {
	dojo = document.querySelector("#dojo");
	contacts = document.querySelector("#contacts");
	sponsors = document.querySelector("#sponsors");

	dojoWidth = dojo.offsetWidth;
	// windowWidth = window.innerWidth;

	contacts.style.left = -dojoWidth / 6 + "px";
	sponsors.style.left = dojoWidth / 6 + "px";
}


var menuContainer = document.querySelector("div#menu-container");
menuContainer.addEventListener('mousedown', function(event) {
	if (event.button == 0) {
		dojoZoom('0em');
		svgFade(0);
	} else {
		dojoZoom('-9em');
		svgFade(1);
	}
});

function svgFade(opacity) {
	frontContainer = document.querySelector("div#front-dojo-container");
	frontContainer.style.opacity = opacity;
}

function dojoZoom(zoomVal) {
	menuContainer.style.transform = "translateZ(" + zoomVal + ")";
}

function redirect() {
	location.reload();
}

