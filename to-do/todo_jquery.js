init();
//Initialize
function init(){
	$("ul").text("");
}

var preItem = "<i class='fa fa-trash' aria-hidden='true'></i><span class='item'>";
var postItem = "</span>";
var newItem = document.createElement("li");

//add item

$("input").keypress(function(evt){
	if (evt.which === 13){
		console.log("pushing");
		newItem.innerHTML = preItem + $(this).val() + postItem;
		$("ul").append(newItem);
		$(this).val("");
	}
});


//cross item
$("ul").on("click", ".item", function(){
	// console.log($(this));
	$(this).toggleClass("done");
});

//remove item
$("ul").on("click", ".fa-trash", function(){
	console.log($(this).parent().remove());
})