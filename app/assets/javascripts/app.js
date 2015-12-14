console.log("We're in good shape");
var prophesy;

function preparePage() {
	prophesy = document.getElementById("prophesy");
	console.log(prophesy);
	prophesy.style.display = "none";

}
function smash() {
	var cookie = document.getElementById("cookie");
	// cookie.style.display = "none";
	if (cookie.src == "http://f.tqn.com/y/webclipart/1/S/z/I/6/Fortune-Cookie.png") {
		cookie.src = "http://coolkidfacts.com/wp-content/uploads/2014/07/explosion.png";
	console.log("it was clicked");
		prophesy.style.display = "block";
	} 
	
}