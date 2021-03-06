console.log("We're in good shape");
var prophesy;

function preparePage() {
	prophesy = document.getElementById("prophesy");
}

function smash() {
	var cookie = document.getElementById("cookie");
	if (cookie.style.display === '') {
		cookie.style.display = 'none';
		debris.style.display = '';
		prophesy.style.display = "block";
	} 
	document.getElementById("prophesy").scrollIntoView();
	
	adjustScore();
	setTimeout(function () {
		document.location.reload(true);
	}, 3500);	
}

function logMeOut() {
	current_user = 0;
	console.log("logout function has been triggered");
}

function adjustScore() {
	$.ajax({
		type: 'POST',
		url: '/increment_score',
		data: { method: 'POST'},
	}).success (200, function() {
		console.log("success");
	}).error(400, function(err) {
		console.log(err);
	});
}