// Follow along with the examples here
// function doNothing(){}

// function sayHallo() {
//     console.log("hello!");
// }
// sayHallo();   ==> this how you call function

// function sayHalloToGilbert() {
//     console.log("Hello, Gilbert");
// }

// function sayHalloToOwino() {
//     console.log("Hello, Owino");
// }

// function sayHalloToKutoto() {
//     console.log("Hello, Kutoto");
// }
// sayHalloToGilbert();
// sayHalloToKutoto();
// sayHalloToOwino();

// function doSomething(thing) {
//     console.log(thing);
//   }
//   doSomething("anything");  //passing the argument 'anything' into our functionpassing the argument 'anything' into our function
  
  
  
//   function sayHelloTo(firstName) {
//     console.log(`Hello, ${firstName}!`);
//   }
  
//   sayHelloTo("Gilbert"); // "Hello, Gilbert!"
//   sayHelloTo("Owino"); // "Hello, Owino!"
//   sayHelloTo("Kutoto"); // "Hello, Kutoto!"
//   sayHelloTo(1); // "Hello, 1!"
  


//   function say(greeting, firstName) {
//     console.log(`${greeting}, ${firstName}!`);
//   }

//    say("Good morning", "Gilbert");


//returning value is js

// function add(x, y) {
//     return x + y;
//   }
//   console.log(add(80,9000));

// function say(greeting, firstName) {
//     return `${greeting}, ${firstName}!`;
// }

// console.log(say("Hello", "Gilbert"));

// function say(greeting, firstName) {
//     console.log(`${greeting}, ${firstName}!`);
// }

// function add(x, y) {
//     x + y;           //this code has no return value
// }
// console.log(add(2, 4));

     //return ends the execution inside the function
// function say(greeting, firstName) {
//     return `${greeting}, ${firstName}!`;
//     console.log("I was called!");  //this code is grayed out because it not reached
// }

// console.log(say("Howdy", "partner"));

function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
}
console.log(say("Howdy", "partner"));