// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2
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
yaakovGreeter.sayHello(); // Yaakov says "Hello"
johnGreeter.sayGoodBye(); // John says "GoodBye"
jenGreeter.sayGoodBye();  // Jen says "GoodBye"
jasonGreeter.sayGoodBye(); // Jason says "GoodBye"
paulGreeter.sayHello(); // Paul says "Hello"
frankGreeter.sayHello(); // Frank says "Hello"
larryGreeter.sayHello(); // Larry says "Hello"
paulaGreeter.sayHello(); // Paula says "Hello"
lauraGreeter.sayHello(); // Laura says "Hello"
jimGreeter.sayGoodBye(); // Jim says "GoodBye"
// STEP 7: Create an object, called 'byeSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
// var byeSpeaker =

// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
speakWord = "Good Bye"; // the speakWord variable is attached to "Good Bye"
var byeSpeaker = "name"; // creates an object named 'byeSpeaker'

// STEP 8: Rewrite the 'speak' function such that it is attached to the
// byeSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
function speak(name) {
  console.log(byeSpeaker + " " + name);
}

// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
// xxxx.xxxx = byeSpeaker;
function byeSpeaker() {
    var _this = this;
    something.on("click", function() {
        console.log(_this);
});
};
