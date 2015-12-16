 console.log("We're in good shape");
var prophesy;

// function gameTime(){
// 	console.log("the game thing is marginally functional");
// 	var canvas = document.getElementById("killingField");
// 	var ctx = canvas.getContext("2d");
// 	ctx.beginPath();
// 	ctx.rect(20, 40, 50, 50);
// 	ctx.fillStyle = "#FF0000";
// 	ctx.fill();
// 	ctx.closePath();
// }


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


function killingField() {
	var bgReady = false;
	var bgImage = new Image();
	bgImage.onload = function () {
		bgReady = true;
	};
	bgImage.src = "http://www.imarvintpa.com/Mapping/Tiles/Ceramic/floor_tile_ceramicBlue.png";
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
