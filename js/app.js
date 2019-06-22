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

