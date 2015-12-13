console.log("We're in good shape");

function smash() {
	var cookie = document.getElementById("cookie");
	// cookie.style.display = "none";
	if (cookie.src == "http://f.tqn.com/y/webclipart/1/S/z/I/6/Fortune-Cookie.png") {
		console.log("img src was a match");
		cookie.src = "https://cdn0.iconfinder.com/data/icons/common-warnings/512/explosion_crack_rock-512.png";
		cookie.style.background = "white";
	}
	else {
		cookie.src = "http://f.tqn.com/y/webclipart/1/S/z/I/6/Fortune-Cookie.png";
	}
	console.log("it was clicked");
// https://cdn0.iconfinder.com/data/icons/common-warnings/512/explosion_crack_rock-512.png
	
}