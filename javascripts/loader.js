window.onload = function () { 
	setTimeout(function() {
		loaderFadeOut(document.querySelector("#loader"), 1000);
	}, 1000);
}

function loaderFadeOut(element, time) {
	element.style.opacity = 0;
	setTimeout(function() {
		element.style.display = "none";
	}, time);
}
