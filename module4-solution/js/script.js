// ******************************* 
// START HERE IF YOU WANT AN EASIER STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!

*/

// STEP 1: (NOTHING TO DO. ALREADY DONE FOR YOU)
// Wrap the entire contents of script.js inside of an IIFE
// See Lecture 52, part 2
// (Note, Step 2 will be done in the SpeakHello.js file.)

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
var yaakovGreeter = {};
yaakovGreeter.name = "Yaakov";
yaakovGreeter.sayHello = function() {
    console.log("Hello " + yaakovGreeter.name);
} // Prints out "Hello Yaakov"
var johnGreeter = {};
johnGreeter.name = "John";
johnGreeter.sayGoodBye = function() {
    console.log("Good Bye " + johnGreeter.name);
} // Prints out "Good Bye John"
var jenGreeter = {};
jenGreeter.name = "Jen";
jenGreeter.sayGoodBye = function() {
    console.log("Good Bye " + jenGreeter.name);
} // Prints out "Good Bye Jen"
var jasonGreeter = {};
jasonGreeter.name = "Jason";
jasonGreeter.sayGoodBye = function() {
    console.log("Good Bye " + jasonGreeter.name);
} // Prints out "Good Bye Jason"
var paulGreeter = {};
paulGreeter.name = "Paul";
paulGreeter.sayHello = function() {
    console.log("Hello " + paulGreeter.name);
} // Prints out "Hello Paul"
var frankGreeter = {};
frankGreeter.name = "Frank";
frankGreeter.sayHello = function() {
    console.log("Hello " + frankGreeter.name);
} // Prints out "Hello Frank"
var larryGreeter = {};
larryGreeter.name = "Larry";
larryGreeter.sayHello = function() {
    console.log("Hello " + larryGreeter.name);
} // Prints out "Hello Larry"
var paulaGreeter = {};
paulaGreeter.name = "Paula";
paulaGreeter.sayHello = function() {
    console.log("Hello " + paulaGreeter.name);
} // Prints out "Hello Paula"
var lauraGreeter = {};
lauraGreeter.name = "Laura";
lauraGreeter.sayHello = function() {
    console.log("Hello " + lauraGreeter.name);
} // Prints out "Hello Laura"
var jimGreeter = {};
jimGreeter.name = "Jim";
jimGreeter.sayGoodBye = function() {
    console.log("Hello " + jimGreeter.name);
} // Prints out "Hello Jim"
yaakovGreeter.sayHello();
johnGreeter.sayGoodBye();
jenGreeter.sayGoodBye();
jasonGreeter.sayGoodBye();
paulGreeter.sayHello();
frankGreeter.sayHello();
larryGreeter.sayHello();
paulaGreeter.sayHello();
lauraGreeter.sayHello();
jimGreeter.sayGoodBye();
// STEP 10: (NOTHING TO DO. ALREADY DONE FOR YOU)
// Loop over the names array and say either 'Hello' or "Good Bye"
// using the 'speak' method or either helloSpeaker's or byeSpeaker's
// 'speak' method.
// See Lecture 50, part 1
for (var i = 0; i < names.length; i++) {
} // A for loop
var array = new Array();
array[0] = "Yaakov";
array[1] = "John";
array[2] = "Jen";
array[3] = "Jason";
array[4] = "Paul";
array[5] = "Frank";
array[6] = "Larry";
array[7] = "Paula";
array[8] = "Laura";
array[9] = "Jim";
array[10] = function(name) {
    console.log("Hello " + name);
};
array[11] = {course: " HTML, CSS & JS"};
console.log(array);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);
array[10]("Yaakov");
array[10]("John");
array[10]("Jen");
array[10]("Jason");
array[10]("Paul");
array[10]("Frank");
array[10]("Larry");
array[10]("Paula");
array[10]("Laura");
array[10]("Jim");
  // STEP 11: (NOTHING TO DO. ALREADY DONE FOR YOU)
  // Retrieve the first letter of the current name in the loop.
  // Use the string object's 'charAt' function. Since we are looking for
  // names that start with either upper case or lower case 'J'/'j', call
  // string object's 'toLowerCase' method on the result so we can compare
  // to lower case character 'j' afterwards.
  // Look up these methods on Mozilla Developer Network web site if needed.
  var firstLetter = names[i].charAt(0).toLowerCase();

  // STEP 12: (NOTHING TO DO. ALREADY DONE FOR YOU)
  // Compare the 'firstLetter' retrieved in STEP 11 to lower case
  // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
  // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
  // name in the loop.
  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }; 

