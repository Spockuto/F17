window.onload = function () { 
	setTimeout(function() {
		fadeOut(document.querySelector("#loader"), 1000);
	}, 1000); 
}

function fadeOut(element, time) {
	document.body.style.opacity = 0;
	setTimeout(function() { 
		element.style.display = "none";
		document.body.style.opacity = 1;
	}, time);
}
