//Answer RGB
var red = 211;
var green = 206;
var blue = 13;
var newColor;
var mode = "EASY";
var corrTile = 1;
var numTiles=3;
var gameOver = false;

//DOM variables
var reset = document.getElementById("reset");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
var title = document.getElementById("title");
var thumbnails = document.querySelectorAll(".thumbnails");
var comments = document.getElementById("comments");
var header = document.querySelector("div");
var f_row = document.getElementById("f_row");
var s_row = document.getElementById("s_row");

//Upon loading.
s_row.style.display = "none";
resetPage();

//EVENT LISTENERS
reset.addEventListener("click", resetPage);
easy.addEventListener("click", changeMode);
hard.addEventListener("click", changeMode);

for (var t=0; t<6; t++){
	thumbnails[t].addEventListener("click", function(){evalAnswer(this);});
}


//FUNCTIONS
//Evaluating answer
function evalAnswer(thumb){
	if (!gameOver){
		if (thumb.style.background === newColor){
			header.style.background = newColor;
			for (var j = 0; j<thumbnails.length; j++){
				thumbnails[j].style.background = newColor;
				thumbnails[j].style.opacity = 1;

			}
			reset.textContent = "Play Again?";
			comments.textContent = "You GOT IT!!!";
			console.log("this tile's color:" +thumb.style.background + "New Color: "+newColor);
			gameOver = true;

		}
		else {
			comments.textContent = "try again!";
			thumb.style.opacity = 0;
		}
	}
}

function changeMode(){
	if (this.textContent !== mode){
		if (this.textContent === "EASY"){
			easy.classList.add("currentMode");
			hard.classList.remove("currentMode");
			numTiles=3;
			mode = "EASY";
			s_row.style.display = "none";
		}
		if (this.textContent ==="HARD"){
			hard.classList.add("currentMode");
			easy.classList.remove("currentMode");
			numTiles=6;
			mode = "HARD";
			s_row.style.display = "";
			console.log("inner numTiles: "+ numTiles);

		}
		resetPage();
		console.log("mode: "+ mode + "| number of tiles: "+ numTiles);
	}
}


//Generate new correct Color
function resetPage(){
	newColor=randomColor();
	title.textContent = newColor;
	comments.textContent = "placeholder";
	reset.textContent = "New Colors";
	gameOver=false;
	refresh();
}

//Generating random color
function randomColor(){
	red = Math.floor(Math.random()*256);
	green = Math.floor(Math.random()*256);
	blue = Math.floor(Math.random()*256);
	return ("rgb(" + red + ", " + green + ", " + blue + ")");	
}


//Generate Tile Set 
function refresh(){
	if (mode === "EASY"){
		corrTile = Math.floor(Math.random()*3 + 1);
		numTiles=3;
		newTiles();
	}
	else {
		corrTile = Math.floor(Math.random()*6 + 1);
		numTiles=6;
		newTiles();
	}
}

//Generate new Tiles
function newTiles(){
	for (var i = 0; i < numTiles; i++){
		if (i === corrTile-1){
			//console.log(thumbnails[i]);
			thumbnails[i].style.background = newColor;
			thumbnails[i].style.opacity = "1";
			//console.log("new color:"+newColor);
		}
		else {
			//console.log(thumbnails[i]);
			thumbnails[i].style.background = randomColor();
			thumbnails[i].style.opacity = "1";
			//console.log("random color: "+ thumbnails[i].style.background);
		}
	}

}






