var command;
var todos = [];
var item;

while (command !== "quit") {
	command = prompt("What would you like to do?").toLowerCase();
	if (command === "list"){
		listTodos();
	}

	else if (command === "new") {
		
		addTodo();
	}

	else if (command === "delete") {
		
		remove(todos);
		

	}
}
alert("you have quit applciation.");


function addTodo(){
	item = prompt("What is your new todo?");
	todos.push(item);
	console.log("Current List");
	listTodos();
}

function remove(array) {
	item = prompt("Which item to delete?");
	index = array.indexOf(item);
	if(index > -1) {
		array.splice(index,1);
		//The second parameter of splice is the number of elements to remove. Note that splice modifies the array in place and returns a new array containing the elements that have been removed.

	}
	console.log("Current List");
	listTodos();
}

function listTodos(){
	console.log("**********");
		todos.forEach(function(todo,i){ 	//i refers to the index of each item.
			console.log(i + " - " + todo) 
			}
		)
		console.log("**********")	
}