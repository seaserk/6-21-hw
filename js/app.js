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
// for (let i=0; i<=100; i++) {
// 	if(i % 5===0){	
// 		console.log(`I found a ${i}. High five!`);
// 	} else {
// 		if(i % 3 ===0){
// 			console.log(`I found a ${i}. Three is a crowd`);
// 		} else {
// 			if(i % 5 === 0 && i % 3 === 0){
// 				console.log(`I found a ${i}. High five!` &&  console.log(`I found a ${i}. Three is a crowd`);
// 			}
// 		}
// 	}
// }

for(let i=0; i<100; i++){
	let statement = `I found an ${i}`;
	if (i % 5 === 0) {
		statement += 'High five';
	}
	if (i % 3 === 0){
		statement += 'Three is a crowd';
	}
	console.log(statement)
}

//Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.


let bank_account = 0;
for (let i = 1; i<=10; i++){
	bank_account += i;

}
console.log(bank_account);
// You got a bonus! Your pay is now doubled each week.
//  Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.

bank_account = 0;
for (let i = 1; i <=100; i++){
	bank_account += i*2;
}
console.log(bank_account);

// function sumAll(arr) {}
//     var lower = Math.min(arr[0], arr[1]);
//     var upper = Math.max(arr[0], arr[1]);

//     var total = 0;

//     for (var i = lower; i <= upper; i++) {
//         total += i;
//     }



//MULTIPLES OF 3 and 5
let sum = 0;
for (let i = 1; i <=1000; i++){
	if (i %3 ===0 || i % 5 === 0){
		sum += i;
	}
}
console.log(sum);
//Arrays & Control flow

//The things inside an array are called ELEMENTS
// No, arrays do not gurantee they will be in order
// You could model test scores, game results, table contents

const quotes = ["Hola amigo", "Your name", "Tom Green"];

const randomThings = [1, 10, "Hello", true]

const first_element = randomThings[0];
console.log(first_element);
randomThings[2] = "World";
console.log(randomThings);

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
ourClass[4] = "Octocat";
ourClass.push("Cloud City");
console.log(ourClass);

//Mix It Up

const myArray = [5, 10, 500, 20]
myArray.push("Egon");
myArray.push("Butters");
myArray.shift();
myArray.pop();
myArray.unshift("Bob Marley");
myArray.splice(4);
Array.prototype.reverse(myArray);
console.log(myArray);
//Mutate means to change.  The reverse method doesnt appear to have done anything.


//Biggie Smalls. - WONT WORK

const rapper = 3;
if (rapper < 100) {
	console.log("little number");
}
else {
	console.log("big number");
}

//MONKEY IN TH MIDDLE -- HELP WITH SYNTAX

const myNumber = 6;
if (myNumber<5){
	console.log("little number")
} else if (myNumber>10) {
	console.log("big number")
} else {
	console.log("monkey")
}




//WHAT"S IN YOUR CLOSET?

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
const kristensClothes = `Kristyn is rocking that ${kristynsCloset[2]} today!`;
console.log(kristensClothes);
// Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
kristynsCloset.splice(6, 0, 'raybans');
console.log(kristynsCloset);
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
kristynsCloset[5] = "Stained knit hat";
console.log(kristynsCloset);
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
thomsCloset[0];
// In the same way, access one item from Thom's pants array.

// Access one item from Thom's accessories array.

// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

// Get more specific about what kind of PJs Thom's wearing this winter. 
// Modify the name of his PJ pants to Footie Pajamas.


function printGreeting(name){
	return(`Hello ${name}`);
}
console.log(printGreeting("Slimer"));

//printCool

function printCool(`${name} is cool`){

 }
console.log(printCool("Captain Ron"));

// //calculateCube
function calculateCube(number){
	return(number*number*number);
}
console.log(calculateCube(4));

// // // isVowel
// // Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if 
// // it is a vowel, false otherwise. The vowel could be upper or lower case. 
// // Test your function on every vowel and make sure it's working. In general, when you write functions, 
function isVowel(str){
	if (str == 'a' || str == 'e' || str == 'i' || str == 'o' || str == 'u'){
		return(true);
	} else {
		return(false);
	}
}
console.log(isVowel("k"));

// //getTwoLengths
// //Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers 
// //where each number is the length of the corresponding string.

function getTwoLengths(str1, str2){
	return[]{

	}
console.log(getTwoLengths("Hank", "Hippopalous"));

// //getMultipleLengths
// // Write a function getMultipleLengths that accepts a single parameter as an argument: 
// //an array of strings. The function should return an array of numbers where each 
// //number is the length of the corresponding string.
// // 
function getMultipleLengths = ['string1', 'string2', 'string3', 'string4', 'string5'];
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// //maxOfThree
// // Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. 
//If all numbers are the same, it doesn't matter which one is returned. 
//If the two largest numbers are the same, one of them should be returned. 
//Be sure to test it with larger values in each of the three locations.

function maxOfThree(num1, num2, num3){
	Math.max(num1, num2, num3)
}
console.log(maxOfThree (30, 21, 8))
//printLongestWord
//Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie,
// the method should return the word that appears first in the array.

function printLongestWord(arr){
	let word = "";
	for (let i = 0; i < arr.length; i++){
		if (word.length < arr[i].length) {

		}
	}
	return word;
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
}

//transmorgrify

// Write a Javascript function called transmogrify. 
// This function should accept three arguments, which you can assume will be numbers. 
// Your function should return the "transmogrified" result.
// The transmogrified result of three numbers is the product of the first two numbers, 
// raised to the power of the third number.

function transmogrify(numbers){
	const total =0;
	for (const i = 0; i < numbers.length; i++){
		const sqrt = Math.sqrt(numbers[i]);
		total = total + sqrt;
	}
	return total;
}
console.log(transmogrify(5, 3, 2));

//reverseWordOrder v2
//write a function reverseWordOrder that accepts a single argument, a string. 
// The function should return a string with the order of the words reversed.

function reverseWordOrder(str){
	return(str);
}

// k. Math Random

math.floor(math.random() *10) + 1 ;

math.floor(math.random() * (100 - 10) + (10);

math.floor(math.random() * 532) + 13267;

// //Write a function that will return a random number between 1 and 10. Test it.
// Add a few more quotes to the quotes array from question III-B-1 above. 
// Write a function that will take an array as a parameter, and 
// return a random element from that array. Call your function
//  a few times, passing in the quotes array. Give it a nice semantic name like getRandomElement.


Objects

//
let user = {
	name: 'Rick Ross',
	email: 'thaboss@worldwide.com',
	age: 40,
	purchased: []
};
user.email = 'thaboss@aol.com';
user.age++;
user.location = 'Miami';


























	;

