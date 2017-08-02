var openingContainer = document.querySelector('div#opening-screen-container');
openingContainer.addEventListener('click', function() {
	openDoors();
	setTimeout(enter, 500);
});

function openDoors() {
	var overlays = document.querySelectorAll('.door-overlay');
	var leftDoor = document.querySelector('#door-left');
	var rightDoor = document.querySelector('#door-right');
	var menuOverlay = document.querySelector('#menu-overlay');

	for (var overlay of overlays) {
		overlay.style.opacity = 0.3;
	}
	leftDoor.style.transform = "rotateY(70deg)";
	rightDoor.style.transform = "rotateY(-70deg)";
	menuOverlay.style.opacity = 1;
}

function enter() {
	// Different value for safari
	safariCheck = /.*Safari.*/i.test(navigator.userAgent) && !/.*Chrome.*/i.test(navigator.userAgent);
	if (safariCheck) {
		var translateZ = 16;
	} else {
		var translateZ = 20;
	}

	var perspective = 20;
	var originY = originYCalc(translateZ, perspective);

	// Style Changes
	var body = document.body;
	var mainContainer = document.querySelector('div#opening-screen-container');
	var castleContainer = document.querySelector('div#castle-container');
	var loader = document.querySelector("#loader");
	var mountains = document.querySelector('#mountains');


	// Chrome for Android bug workaround
	if (/.*Android.*Chrome.*/i.test(navigator.userAgent)) {
		var waitTime = 4000;
	} else {
		var waitTime = 2000;
	}

	if (safariCheck) {
		body.style.perspectiveOrigin = `50% ${originY}%`;
	}
	openingContainer.style.perspectiveOrigin = `50% ${originY}%`;
	castleContainer.style.transform = `translateZ(${translateZ}em)`;
	mountains.style.transform = `translateX(-50%) translateZ(7em)`;
	castleFadeOut(mainContainer, loader, waitTime);
}

function originYCalc(translateZ, perspective) {
	var zoomFactor = perspective / (perspective - translateZ);

	// Percentage Distance of door from top of castle
	var doorCenter = 57.21 / 100;
	var castleHeight = document.querySelector("#castle-container").offsetHeight;
	var screenHeight = window.innerHeight;

	// dist = Dist between originY pt and center of door
	var dist = ( (doorCenter - 1)*castleHeight + screenHeight/2 ) / (zoomFactor - 1);

	// height of pt from the top (+2 is a correction to account for translation)
	var originY = 100 * ( dist + (doorCenter - 1)*castleHeight + screenHeight ) / screenHeight  +  2;
	return originY;
}

function castleFadeOut(element, loader, time) {
	element.style.opacity = 0;
	setTimeout(function() { 
		element.style.display = "none";
		overlay = document.querySelector('#menu-overlay');
		overlay.style.opacity = 0;
		setTimeout(function() { overlay.style.display = "none"; }, 1000);
	}, time);
}
