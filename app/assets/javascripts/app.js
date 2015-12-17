 console.log("We're in good shape");
var prophesy;

function preparePage() {
	prophesy = document.getElementById("prophesy");
	console.log(prophesy);
}

function smash() {
	var cookie = document.getElementById("cookie");
	if (cookie.style.display === '') {
		cookie.style.display = 'none';
		debris.style.display = '';
		prophesy.style.display = "block";
		console.log("it was clicked");

	} 
	adjustScore();
		setTimeout(refresh, 4000);	
}

function logMeOut() {
	current_user = 0;
	console.log("logout function has been triggered");
}
		function refresh() {
					document.location.reload(true);
				}

function adjustScore() {
	$.ajax({
		type: 'PUT',
		url: '/increment_score',
		data: { _method: 'PUT'},
	}).success (200, function() {
		console.log("success");
	});
}
