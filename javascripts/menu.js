window.addEventListener('resize', menuSizeChange);
function menuSizeChange() {
	frontChange();
	shieldDistChange();
	ninjaChange();
}

function frontChange() {
	if ( getComputedStyle(document.querySelector("#dojo-laptop")).opacity ) {
		var dojo = document.querySelector("#dojo-laptop");
		var trainDummy = document.querySelector("#traindummy");
		var table = document.querySelector("#table");

		var dojoWidth = dojo.offsetWidth;
		var dojoHeight = dojo.offsetHeight;

		trainDummy.style.left = -dojoWidth/5 + "px";
		trainDummy.style.height = dojoHeight/3.5 + "px";
		table.style.left = dojoWidth/5 + "px";
		table.style.height = dojoHeight/6.5 + "px";
	}
}

function shieldDistChange() {
	if ( getComputedStyle(document.querySelector("#dojo-laptop")).opacity ) {
		var dojo = document.querySelector("#dojo-laptop");
		var contacts = document.querySelector("#contacts");
		var sponsors = document.querySelector("#sponsors");

		var dojoWidth = dojo.offsetWidth;
		var dojoHeight = dojo.offsetHeight;

		contacts.style.left = -dojoWidth/6 + "px";
		contacts.style.height = dojoHeight/7 + "px";
		sponsors.style.left = dojoWidth/6 + "px";
		sponsors.style.height = dojoHeight/7 + "px";
	} /*else {
		var dojo = document.querySelector("#dojo-mobile");
		var contacts = document.querySelector("#contacts");
		var sponsors = document.querySelector("#sponsors");

		var dojoWidth = dojo.offsetWidth;
		var dojoHeight = dojo.offsetHeight;

		contacts.style.left = -dojoWidth / 6 + "px";
		contacts.style.height = dojoHeight / 6 + "px";
		sponsors.style.left = dojoWidth / 6 + "px";
		sponsors.style.height = dojoHeight / 6 + "px";	
	}*/
}

function ninjaChange() {
	if ( getComputedStyle(document.querySelector("#dojo-laptop")).opacity ) {
		var dojo = document.querySelector("#dojo-laptop");
		var ninja = document.querySelector("#ninja");

		ninja.style.height = dojo.offsetHeight/7 + "px";
	}
}


// var menuContainer = document.querySelector("div#menu-container");
// menuContainer.addEventListener('mousedown', function(event) {
// 	if (event.button == 0) {
// 		dojoZoom('0em');
// 		svgFade(0);
// 	} else {
// 		dojoZoom('-12em');
// 		svgFade(1);
// 	}
// });

// function svgFade(opacity) {
// 	frontContainer = document.querySelector("div#front-dojo-container");
// 	frontContainer.style.opacity = opacity;
// }

// function dojoZoom(zoomVal) {
// 	menuContainer.style.transform = "translateZ(" + zoomVal + ")";
// }

function redirect() {
	location.reload();
}

