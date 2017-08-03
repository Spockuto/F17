// Position Changes
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

		var trainDummyText = document.querySelector("#traindummy-text");
		var tableText = document.querySelector("#table-text");

		var dojoWidth = dojo.offsetWidth;
		var dojoHeight = dojo.offsetHeight;

		trainDummy.style.left = -dojoWidth/5 + "px";
		trainDummy.style.height = dojoHeight/3.5 + "px";
		table.style.left = dojoWidth/5 + "px";
		table.style.height = dojoHeight/6.5 + "px";
		trainDummyText.style.left = -dojoWidth/5 + "px";
		tableText.style.left = dojoWidth/5 + "px";
	}
}

function shieldDistChange() {
	if ( getComputedStyle(document.querySelector("#dojo-laptop")).opacity ) {
		var dojo = document.querySelector("#dojo-laptop");
		var contacts = document.querySelector("#contacts");
		var contactsText = document.querySelector("#contacts-text");

		var sponsors = document.querySelector("#sponsors");
		var sponsorsText = document.querySelector("#sponsors-text");

		var dojoWidth = dojo.offsetWidth;
		var dojoHeight = dojo.offsetHeight;

		contacts.style.left = -dojoWidth/6 + "px";
		contacts.style.height = dojoHeight/7 + "px";
		sponsors.style.left = dojoWidth/6 + "px";
		sponsors.style.height = dojoHeight/7 + "px";
		contactsText.style.left = -dojoWidth/6 + "px";
		sponsorsText.style.left = dojoWidth/6 + "px";
	}
}

function ninjaChange() {
	if ( getComputedStyle(document.querySelector("#dojo-laptop")).opacity ) {
		var dojo = document.querySelector("#dojo-laptop");
		var ninja = document.querySelector("#ninja");

		ninja.style.height = dojo.offsetHeight/7 + "px";
	}
}


// Description appearance
function showText(id) {
	text = document.querySelector("#" + id + "-text");
	text.style.opacity = 1;
}
function hideText(id) {
	text = document.querySelector("#" + id + "-text");
	text.style.opacity = 0;
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

