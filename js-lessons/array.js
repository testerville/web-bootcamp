var array = prompt("Please enter an Array separated by semi-colons:").split(";");
var result;
console.log(array);
//reverse(array);
//isUniform(array);
//sumArray(array);
//max(array);

function reverse(array){
	result =[];
	iLen = array.length-1;
	array.forEach(function(item,i){
		result[i]=array[iLen-i];
	});
	return result;
}

function isUniform(array){

	item1 = array[0];
	for (var i=1, i<array.length, i++){
		if (array[0]!== array[i]){
			result = false;
			return true;
		}
	};

	return false;
}

function sumArray(array){
	result=0;
	array.forEach(function(item){
		result += Number(item);
	});
	return result;
}

function max(array){
	result=Number(array[0]);
	for (var i=1, i<array.length, i++){
		if (result < Number(array[i])){
			result=Number(array[i]);
		}
	};
	return result;
}