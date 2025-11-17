// var n=9;
// console.log(n)
// var n=90;


// if (true) {
//   var x = 10;
// }
// console.log(x);   // 10  (still accessible outside the block)


// var a = 5;
// var a = 10;   // allowed
// console.log(a);  // 10


// if (true) {
//   let y = 20;
// }
// console.log(y);  //  Error: y is not defined


// let x = 5;
// let x = 10;   // Error


// {
//   const pi = 3.14;
// }
// console.log(pi); // Error



// const age = 25;
// age = 30;  // TypeError



// console.log(msg);  // Error (TDZ)
// const msg = "Hello";


// const msg = "Hello\n" +
//             "Welcome to JavaScript\n" +
//             "Have a great day!";
// console.log(msg);



// const msg = `
// Hello
// Welcome to JavaScript
// Have a great day!
// `;

// console.log(msg);





// const name = "Ani";
// const age = 20;
// const msg = "My name is " + name + " and I am " + age + " years old.";



// const name = "Ani";
// const age = 20;

// const msg = `My name is ${name} and I am ${age} years old.`;
// console.log(msg);




// function tag(strings, ...values) {
//   console.log(strings);
//   console.log(values);
// }

// const name = "Ani";
// const age = 20;

// tag`My name is ${name} and I am ${age} years old.`;



// Arrow functions
// Traditional Way:

// function add(a, b) {
//   return a + b;
// }
    
// add(9,8);



//using arrow function
// const add = (a, b) => {
//   return a + b;
// };

// add(9,8);


// const square = x => {
//   return x * x;
// };
//square(6);
// const hello = () => {
//   console.log("Hello!");
// };
//hello();


// const add = (a, b) => a + b;


// let num = 10;
// let result = (num % 2 === 0) ? "Even" : "Odd";
// console.log(result);


// let isLoggedIn = true;
// let message = isLoggedIn ? "Welcome!" : "Please login";
// console.log(message);

// Array destructuring means taking values from an array based on their position.


// const colors = ["red", "green", "blue"];

// const [first, second, third] = colors;

// console.log(first);  // red
// console.log(second); // green
// console.log(third);  // blue


// Object Destructuring
// const person = {
//   name: "Amit",
//   age: 19,
//   city: "Delhi"
// };

// const { name, age, city } = person;

// console.log(name); // Amit
// console.log(age);  // 19
// console.log(city); // Delhi

//Nested Destructuring
// const student = {
//   name: "Reena",
//   marks: {
//     maths: 90,
//     science: 88
//   }
// };

// const { marks: { maths, science } } = student;

// console.log(maths);   // 90
// console.log(science); // 88



// Function Parameter Destructuring

// function display({ name, age }) 
// {
//   console.log(name);
//   console.log(age);
// }

// const person = { name: "Asha", age: 22 };
// display(person);


// const numbers = [1, 2, 3];
// console.log(...numbers);   


// Basic Use of ?. for Safe Property Access 

// const student = {
//   name: "Ani",
//   marks: {
//     math: 95,
//     science: 88
//   }
// };

// console.log(student?.marks?.math);  
// // 95
