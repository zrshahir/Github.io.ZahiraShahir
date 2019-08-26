// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
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

// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
// var helloSpeaker =

// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
var speakWord = "Hello"; // Creates a variable named speakWord 
var helloSpeaker = "name"; // Creates an object named helloSpeaker

// STEP 4: Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
function speak(name) {
  console.log(helloSpeaker + " " + name);
}

// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
// xxxx.xxxx = helloSpeaker;
function helloSpeaker() {
    var _this = this;
    something.on("click", function() {
        console.log(_this);
});
};
