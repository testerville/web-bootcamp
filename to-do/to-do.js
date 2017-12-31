


var list = document.querySelector("ul"); 
var listItems = document.querySelectorAll(".item");
var input = document.querySelector("input");
var newItem_Pre = "<li><i class='fa fa-trash' aria-hidden='true'></i><span class='item'>";
var newItem_Post = "</span></li>";
var evt_Target;


initialize();
//Initialization function
function initialize(){
	list.textContent = "";
}

//Add an Item
input.addEventListener("keypress", (event) => {
	if (event.key === "Enter"){
		newItem = input.value;
		input.value = "";
		newHTML = newItem_Pre + newItem + newItem_Post;
		list.innerHTML += newHTML;
	}
});

//Remove an Item
list.addEventListener("click", function(event){
	evt_Target = event.target;
	if (evt_Target.classList[1] === "fa-trash"){
		console.log("Child Removed: "+list.removeChild(evt_Target.parentNode));
	}
});


//Mark item as done
list.addEventListener("click", function(event){
	evt_Target = event.target;
	console.log(evt_Target.classList);
	if (evt_Target.classList[0] === "item"){
		evt_Target.style.textDecoration = "line-through";
		evt_Target.style.opacity = ".5";
	}
});

//Toggle add mode
var plus = document.querySelector(".fa-plus");
plus.addEventListener("click", function(){
	input.classList.toggle("invisible");
	console.log(input.classList);

})




