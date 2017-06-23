// Basic version of the opening screen
// Doorknob still looks weird though

window.addEventListener('click', () => {
	openDoors();
	setTimeout(exit, 500);
});

window.addEventListener('keydown', () => {
	reset();
});

function openDoors() {
	doors = document.querySelectorAll('.castle-door');
	leftDoor = document.querySelector('#castle-door-left');
	rightDoor = document.querySelector('#castle-door-right');
	doorknobs = document.querySelectorAll('.castle-doorknob');
	for (var door of doors) {
		door.style.backgroundColor = "#a50101";
	}
	for (var doorknob of doorknobs) {
		doorknob.style.backgroundColor = "#aaa";
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

	container = document.querySelector('div#opening-screen-container');
	container.style.transform = `translateZ(${translateZ}em)`;
	document.body.style.perspectiveOrigin = `50% ${originY}%`;
	container.style.opacity = 0;
}

function reset() {
	doors = document.querySelectorAll('.castle-door');
	doorknobs = document.querySelectorAll('.castle-doorknob');
	for (var door of doors) {
		door.style.transform = "rotateY(0deg)";
		door.style.backgroundColor = "#e80000";
	}
	for (var doorknob of doorknobs) {
		doorknob.style.backgroundColor = "#eee";
	}
	container = document.querySelector('#opening-screen-container');
	container.style.transform = "translateZ(0px)";
	container.style.opacity = 1;
}
