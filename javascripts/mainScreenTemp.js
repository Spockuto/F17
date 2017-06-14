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
	doorknobs = document.querySelectorAll('.castle-doorknob');
	for (var door of doors) {
		door.style.transform = "rotateY(80deg)";
		door.style.backgroundColor = "#a50101";
	}
	for (var doorknob of doorknobs) {
		doorknob.style.backgroundColor = "#aaa";
	}
}

function exit() {
	zoomFactor = 4;
	originY = 55.72 + ( (55.72 - 50)/(zoomFactor - 1) );

	container = document.querySelector('div#opening-screen-container');
	container.style.transform = `scale(${zoomFactor})`;
	container.style.transformOrigin = `50% ${originY}%`;
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
