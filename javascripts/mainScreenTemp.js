// Basic version of the opening screen
// Doorknob still looks weird though

document.addEventListener('click', () => {
	openDoors();
	setTimeout(exit, 500);
});

// window.addEventListener('keydown', () => {
// 	reset();
// });

function openDoors() {
	var overlays = document.querySelectorAll('.door-overlay');
	var leftDoor = document.querySelector('#door-left');
	var rightDoor = document.querySelector('#door-right');

	for (var overlay of overlays) {
		overlay.style.opacity = 0.3;
	}
	leftDoor.style.transform = "rotateY(70deg)";
	rightDoor.style.transform = "rotateY(-70deg)";
}

function exit() {
	var translateZ = 20;
	var perspective = 20;
	var zoomFactor = perspective / (perspective - translateZ);

	// Percentage Distance of door from top of castle
	var doorCenter = 57.21 / 100;
	var castleHeight = document.querySelector("#castle-container").offsetHeight;
	var screenHeight = window.innerHeight;

	// dist = Dist between originY pt and center of door
	var dist = ( (doorCenter - 1)*castleHeight + screenHeight/2 ) / (zoomFactor - 1);

	// height of pt from the top (+1 is a correction to account for translation)
	var originY = 100 * ( dist + (doorCenter - 1)*castleHeight + screenHeight ) / screenHeight  +  2;

	// Chrome for Android bug workaround
	if (/.*Android.*Chrome.*/i.test(navigator.userAgent))
		var waitTime = 4000;
	else
		var waitTime = 2000;

	var body = document.body;
	var mainContainer = document.querySelector('div#opening-screen-container');
	var castleContainer = document.querySelector('div#castle-container');
	var loader = document.querySelector("#loader");
	var mountains = document.querySelector('#mountains');

	mainContainer.style.perspectiveOrigin = `50% ${originY}%`;
	castleContainer.style.transform = `translateZ(${translateZ}em)`;
	mountains.style.transform = `translateX(-50%) translateZ(10em)`;
	castleFadeOut(mainContainer, loader, waitTime);
}

function castleFadeOut(element, loader, time) {
	element.style.opacity = 0;
	setTimeout(function() { loader.style.opacity = 1; }, 2000);
	setTimeout(function() { 
		element.style.display = "none";
		loader.style.opacity = 0;
		setTimeout(function() { loader.style.display = "none"; }, 1000);
	}, time);
}
