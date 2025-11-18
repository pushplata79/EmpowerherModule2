// //callbacks
// // function greet() {
// //     console.log("Hello, student! Welcome to JavaScript 😊");
// // }

// // function print(callback) {
// //     callback();   // calling the function you passed
// // }

// // // passing greet into print
// // print(greet);



// function sayHello() {
//     console.log("Hello!");
// }

// function sayBye() {
//     console.log("Goodbye!");
// }

// function displayMessage(callback) {
//     callback();  // runs whichever function is passed
// }

// displayMessage(sayHello);
// displayMessage(sayBye);




// function printHello(name) {
//     console.log("Hello " + name);
// }

// function print(callback) {
//     callback("Ani");
// }

// print(printHello);



// //HOF

// function greet() {
//     console.log("Hello!");
// }

// function doSomething(callback) {   // takes a function -> HOF
//     callback();
// }

// doSomething(greet);


// let numbers = [1, 2, 3, 4, 5];
// let newArray = [];

// for (let i = 0; i < numbers.length; i++) {
//     newArray.push(numbers[i] * 2);
// }

// console.log(newArray);



// let numbers = [1, 2, 3, 4, 5];
// let result = numbers.map(n => n * 2);
// console.log(result);



// //map

// let numbers = [1, 2, 3, 4];
// let doubled = numbers.map(numbers=>numbers * 2);
// console.log(doubled); // [2, 4, 6, 8]

// //forEach
// let fruits = ["apple", "banana", "mango"];
// fruits.forEach(ani);
// function ani(item)
// {
//   console.log(item);
// }

// //filter

// let f = [23,56,77,89,34];

// let m=f.filter(n=>n>50);

// console.log(m);


// //reduce

// let fruits = [3,6,7,9,4];
// let m=fruits.reduce((s,n)=>s+n);
// console.log(m);



//sort

// let numbers = [20, 5, 30, 10];
// numbers.sort((a, b) => a- b);
// console.log(numbers);


// let numbers = [20, 5, 30, 10];
// numbers.sort((a, b) => b- a);
// console.log(numbers);


// let names = ["Rohan", "Amit", "Sneha", "Ankit"];

// names.sort((a, b) => a.localeCompare(b));

// console.log(names);


// // ["Amit", "Ankit", "Rohan", "Sneha"]


