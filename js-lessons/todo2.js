var list = document.querySelectorAll("li");
console.log(list);
for (var i=0; i<list.length; i++){
	list[i].addEventListener("click", function(){
		
		this.classList.toggle("done");
		
	});
	list[i].addEventListener("mouseover", function(){
		
		this.classList.add("green");
		
	});
	list[i].addEventListener("mouseout", function(){
		
		this.classList.remove("green");
		
	});
}