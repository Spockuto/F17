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
	zoomFactor = 15;
	originY = 55.72 + ( (55.72 - 50)/(zoomFactor - 1) );

	container = document.querySelector('div#opening-screen-container');
	container.style.transform = `translateZ(${zoomFactor}em)`;
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
	container.style.transform = "scale(1)";
	container.style.opacity = 1;
}
