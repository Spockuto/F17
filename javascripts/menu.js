// Position Changes
window.addEventListener('resize', menuSizeChange);
function menuSizeChange() {
	if ( getComputedStyle(document.querySelector("#dojo-laptop")).opacity ) {
		frontChange();
		shieldDistChange();
		ninjaChange();
	}
}

function frontChange() {
	var frontContainer = document.querySelector("div#front-dojo-container");
	var dojo = document.querySelector("#dojo-laptop");
	var trainDummy = document.querySelector("#traindummy");
	var table = document.querySelector("#table");

	var trainDummyText = document.querySelector("#traindummy-text");
	var tableText = document.querySelector("#table-text");

	var dojoWidth = dojo.offsetWidth;
	var dojoHeight = dojo.offsetHeight;

	// Dimentions, X-Axis positioning
	trainDummy.style.left = -dojoWidth/5 + "px";
	trainDummy.style.height = dojoHeight/3.7 + "px";
	table.style.left = dojoWidth/5 + "px";
	table.style.height = dojoHeight/6.5 + "px";

	trainDummyText.style.left = -dojoWidth/5 + "px";
	trainDummyText.style.top = -dojoHeight/30 + "px";
	tableText.style.left = dojoWidth/5 + "px";
	tableText.style.top = -dojoHeight/30 + "px";

	// Y-axis positioning
	frontContainer.style.top = dojoHeight/3 + "px";
}

function shieldDistChange() {
	var dojo = document.querySelector("#dojo-laptop");
	var contacts = document.querySelector("#contacts");
	var contactsText = document.querySelector("#contacts-text");

	var sponsors = document.querySelector("#sponsors");
	var sponsorsText = document.querySelector("#sponsors-text");

	var dojoWidth = dojo.offsetWidth;
	var dojoHeight = dojo.offsetHeight;

	contacts.style.left = -dojoWidth/6 + "px";
	sponsors.style.left = dojoWidth/6 + "px";
	contacts.style.height = dojoHeight/7 + "px";
	sponsors.style.height = dojoHeight/7 + "px";

	contactsText.style.left = -dojoWidth/6 + "px";
	sponsorsText.style.left = dojoWidth/6 + "px";
	contactsText.style.top = dojoHeight/12 + "px";
	sponsorsText.style.top = dojoHeight/12 + "px";
}

function ninjaChange() {
	var dojo = document.querySelector("#dojo-laptop");
	var ninja = document.querySelector("#ninja");
	var ninjaText = document.querySelector("#ninja-text");

	var dojoHeight = dojo.offsetHeight;

	ninja.style.height = dojoHeight/7 + "px";
	ninjaText.style.top = -dojoHeight/19 + "px";
}


// Description appearance
function showText(id) {
	text = document.querySelector("#" + id + "-text");
	text.style.opacity = 1;
}
function hideText(id) {
	text = document.querySelector("#" + id + "-text");
	text.style.opacity = 0.2;
}


// Double Layer
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

