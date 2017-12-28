var button = document.querySelector("button");

button.addEventListener("click", function(){
	document.body.classList.toggle("purple");
})




/* Alternate Solution
var button = document.querySelector("button");
var body = document.querySelector("body");
var flip = true;
button.addEventListener("click", function(){
	if(flip) {
		body.style.background= "purple";
	}
	else {
		body.style.background= "white";
	}
	flip = !flip;
});
*/