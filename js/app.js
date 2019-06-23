console.log ('working');

// How do we assign a value to a variable?
// USE LET OR CONST. LET IF IT IS A VALUE THAT IS ABLE TO CHANGE AND CONST IF IT WILL BE IMMUTABLE
// How do we change the value of a variable?
// BY REASSIGNING ITS VALUE
// How do we assign an existing variable to a new variable?
// LET SECONDVARIABLE = FIRSTVARIABLE
// Remind me, what are declare, assign, and define?
// DECLARE CREATES THE VARIABLE, ASSIGN GIVES THE VARIABLE A VALUE, DEFINE
// What is pseudocoding and why should you do it?
// PSEUDOCODING IS THE PROCESS OF WRITING OUT NOTES THAT ESTABLISH THE PLAN FOR WRITING THE CODE
// What percentage of time should be 
// spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// 90% SHOULD BE PLANNING AND 10% SHOULD BE TYPING IN CODE



// //create variable called firstVariable
let firstVariable = "hello world";
// Change the value of this variable to some number.
firstVariable = 12;
// Store the value of firstVariable in a new variable called secondVariable
let secondVariable = firstVariable;
// Change the value of secondVariable to any string.
secondVariable = "potato";
// What is the value of firstVariable?
//12


//Create a variable called yourName and set it equal to your name as a string. 
let yourName = "Kyle"
//Then, write an expression that takes the string 
//"Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
let greeting = `Hello, my name is ${yourName}`;
	


//
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false || false || false || false || false || true);
  console.log(false == false)
  console.log(e == 'Kevin');
  console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression)
  console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 !== '48');

// //Declare a variable animal. Set it to be either "cow" or something else.
// Write code that will print out "mooooo" if the it is equal to cow.
// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."

let animal = "duck";

if (animal == "cow") {
	console.log("mooooo");
} else {
	console.log("Hey, you're not a cow");
}

let age = 9;
if (age >= 16) {
	console.log("Here are your keys");
} else {
	console.log("sorry, you're too young");
}

// Write a loop that will print out all the numbers from 0 to 10, inclusive.

// Write a loop that will print out all the numbers from 10 up to and including 400.

// Write a loop that will print out every third number starting with 11 and going no higher than 4000.

for (let i=0; i <= 10; i++) {
	console.log(i);
}
for (let i=10; i <=400; i++){
	console.log(i);
}
for (let i=11; i<=4000; i+=3) {
	console.log(i);
}
// Print out the numbers that are within the range of 1 - 100.

// Adjust your code to add a message next to even numbers only that says: "<-- is an even number".

for (let i=1; i <= 100; i++){
	//console.log (i);
  if (i%2 ===0) {
  	console.log(`${i}<--- number is even`);
  } else {
  	console.log(i);
  }
} 

//For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.
for (let i=0; i<=100; i++) {
	if(i % 5===0){	
		console.log(`I found a ${i}. High five!`);
	} else {
		if(i % 3 ===0){
			console.log(`I found a ${i}. Three is a crowd`);
		} else {
			if(i % 5 === 0 && i % 3 === 0){
				console.log(`I found a ${i}. High five!`) &&
				console.log(`I found a ${i}. Three is a crowd`);
			}
		}
	}
}
//WHY IS ZERO RETURNING A HIGH FIVE??? NEED HELP ALSO LOGGING BOTH 5 & 3

//Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.


// const  bank_account = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (const i = 0; i <= bank_account.length; i++) {
// 	console.log[i];
// }

// function sumAll(arr) {}
//     var lower = Math.min(arr[0], arr[1]);
//     var upper = Math.max(arr[0], arr[1]);

//     var total = 0;

//     for (var i = lower; i <= upper; i++) {
//         total += i;
//     }



//MULTIPLES OF 3 and 5

//Arrays & Control flow

//The things inside an array are called ELEMENTS
// No, arrays do not gurantee they will be in order
// You could model test scores, game results, table contents

// FIX. const quotes = ['''];

const randomThings = [1, 10, "Hello", true]

const first_element = randomThings[0];
console.log(first_element);
randomThings[2] = "World";
console.log(randomThings);






