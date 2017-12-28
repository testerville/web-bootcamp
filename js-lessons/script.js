/*var age = prompt("What is your age?");
var days = age*365.25;

console.log("50 years is approx. "+days+" days");

if (age<0){
	console.log("error, error");
}

else if (age == 21) {
	console.log("happy 21st!");
}

if (age % 2 != 0) {
	console.log("your age is odd. age \% 2: "+age % 2);
}

if (Math.sqrt(age) % 1 === 0 || true) {
	console.log("perfect square. sqrt \% 1 = " + Math.sqrt(age) % 1);
}*/

/*var count = -10;
while (count < 20) {
	console.log("count is: "+count);
	count++;
}

count = 10;
while (count < 21) {
	if (count % 2 ===0) {
		console.log("even count is: "+count);
	}
	count+=2;
}

count = 301;
while (count < 334) {
	console.log("odd count is: "+count);
	count+=2;
}

count = 5;
while (count < 51) {
	if (count%5 ===0 && count%3 === 0){
		console.log("3, 5 count is: "+count);
	}
	count+=5;
}*/
/*var answer = prompt("Are we there yet?").toLowerCase();

while (answer !== "yea" && answer.indexOf("yes")<0){
	answer = prompt("Are we there yet?").toLowerCase();
}

alert("We've made it!");*/


/*var count = -10;
for (count; count < 20; count++) {
	console.log("count is: "+count);
}


for (count=10; count < 21; count+=2) {
	if (count % 2 ===0) {
		console.log("even count is: "+count);
	}
}


for (count=301; count < 334; count+=2) {
	console.log("odd count is: "+count);
}


for (count=5; count < 51; count+=5) {
	if (count%5 ===0 && count%3 === 0){
		console.log("3, 5 count is: "+count);
	}
}*/

function isEven(num) {
	return num%2 === 0;
}

function factorial(num) {
	
	if(num ===0){
		return 1;
	}
	else if (num >= 0){
		var result=1;
		for(num; num>1; num--){
			result *= num;
			console.log(num);
		}

		return result;
	}
	else {return false;}
}

function kebabToSnake(kebab) {
	return kebab.replace("-","_");
}


