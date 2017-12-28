var rounds_input = document.querySelector("input");
var rounds = document.getElementById("rounds");


//add event listener for user entry for number of rounds
rounds_input.addEventListener("change", function(){
	if (rounds_input.value > 0) {
		rounds.textContent = rounds_input.value;
	}
	else{
		rounds.textContent = "5";
	}
});

//event listener for updating user score
var p1_score = document.getElementById("p1_score");
var p2_score = document.getElementById("p2_score");

//points action
var p1_button = document.querySelector("input:nth-of-type(2)");
var p2_button = document.querySelector("input:nth-of-type(3)");
p1_button.addEventListener("click", function(){addPoints(p1_score);});
p2_button.addEventListener("click", function(){addPoints(p2_score);});

//reset action
var reset_button = document.querySelector("input[type='submit']");
reset_button.addEventListener("click", function(){
	p1_score.textContent = "0";
	p2_score.textContent = "0";
	p1_score.classList.remove("green");
	p2_score.classList.remove("green");
})

function addPoints(p_score){
	if (p1_score.textContent<rounds.textContent && p2_score.textContent<rounds.textContent){
		p_score.textContent = Number(p_score.textContent)+1;
		if (p_score.textContent === rounds.textContent){
			p_score.classList.add("green");
		}
	}
}