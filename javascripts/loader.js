function loaderChange() {	
	setTimeout(function() {
		loaderFadeOut(document.querySelector("#loader"), 500);
	}, 500);

	document.body.onclick = "nextState(event)";
	document.body.setAttribute('onclick', "nextState(event)");
}

function loaderFadeOut(element, time) {
	$('#boiler').show();
	$('nav.circular-menu').show();
	$('footer.footer').show();

	element.style.opacity = 0;
	setTimeout(function() {
		element.style.display = "none";
	}, time);
}
