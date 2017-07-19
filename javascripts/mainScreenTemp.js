// Basic version of the opening screen
// Doorknob still looks weird though

window.addEventListener('click', () => {
	openDoors();
	setTimeout(exit, 500);
});

// window.addEventListener('keydown', () => {
// 	reset();
// });

function openDoors() {
	overlays = document.querySelectorAll('.door-overlay');
	leftDoor = document.querySelector('#door-left');
	rightDoor = document.querySelector('#door-right');

	for (var overlay of overlays) {
		overlay.style.opacity = 0.3;
	}
	leftDoor.style.transform = "rotateY(70deg)";
	rightDoor.style.transform = "rotateY(-70deg)";
}

function exit() {
	translateZ = 20;
	perspective = 20;
	zoomFactor = perspective / (perspective - translateZ);

	// Percentage Distance of door from top of castle
	doorCenter = 57.21 / 100;
	castleHeight = document.querySelector("#castle-container").offsetHeight;
	screenHeight = window.innerHeight;

	// dist = Dist between originY pt and center of door
	dist = ( (doorCenter - 1)*castleHeight + screenHeight/2 ) / (zoomFactor - 1);

	// height of pt from the top
	originY = 100 * ( dist + (doorCenter - 1)*castleHeight + screenHeight ) / screenHeight;
	// Correction to account for translation
	originY += 1;

	body = document.body;
	mainContainer = document.querySelector('div#opening-screen-container');
	castleContainer = document.querySelector('div#castle-container');
	mountains = document.querySelector('#mountains');

	body.style.perspectiveOrigin = `50% ${originY}%`;
	castleContainer.style.transform = `translateZ(${translateZ}em)`;
	mountains.style.transform = `translateX(-50%) translateZ(10em)`;
	fadeOut(mainContainer, 3000);
}

// function reset() {
// 	doors = document.querySelectorAll('.castle-door');
// 	doorknobs = document.querySelectorAll('.castle-doorknob');
// 	for (var door of doors) {
// 		door.style.transform = "rotateY(0deg)";
// 		door.style.backgroundColor = "#e80000";
// 	}
// 	for (var doorknob of doorknobs) {
// 		doorknob.style.backgroundColor = "#eee";
// 	}
// 	container = document.querySelector('#opening-screen-container');
// 	container.style.transform = "translateZ(0px)";
// 	container.style.opacity = 1;
// }
