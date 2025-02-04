import React from "react";

function This() {
  return <div>this</div>;
}

export default This;

// It will not print i am writing the code only for understanding purpose

// this in global space refers to window object
// console.log(this); // globalObject

// this in function refers to the object that is calling the function
// this in strict mode - (this substitutes)
// function fn () {
//     console.log(this);
// }
// this value depends on how the function is called
// fn(); // window object without strict mode and in strict mode it will be undefined
// window.fn(); // window object

// this in arrow functions
// const fn = () => {
//     console.log(this); // globalObject
// }
// fn(); // globalObject

// this inside an objects's method

// const student = {
//     name: 'John',
//     sayHi: function () {
//         console.log(this.name); // obj
//     }
// }

// student.sayHi(); // obj 🟢

// call apply bind methods (sharing methods) ✔️❤️
// const student2 = {
//   name: "Jay Gupta",
// };
// student.sayHi.call(student2); // Jay Gupta

// const student = {
//     name: 'John',
//     sayHi: function (city, country) {
//         console.log(this.name, city, country); // obj
//     }
// }
// student.sayhi.apply(student2,["Tundla", "India"]); // Jay Gupta Tundla India

// const student = {
//     name: 'John',
//     sayHi: function (city, country) {
//         console.log(this.name, city, country); // obj
//     }
// }

// const student2 = {
//     name: "Jay Gupta",
// };
// let studentInfo = student.sayHi.bind(student2, "Tundla", "India"); // Jay Gupta Tundla India
// studentInfo();
// call apply bind methods (sharing methods) ✔️❤️

// this in arrow functions ☑️
// const obj = {
//   name: "John",
//   sayHi: () => {
//     console.log(this); // globalObject
//   },
// };

// obj.sayHi(); // globalObject //enclosing lexical context  ☑️

// this inside nested functions
// const obj = {
//   name: "John",
//   sayHi: function () {
//     const y = () => {
//       console.log(this); // obj
//     };
//     y();
//   },
// };

// const obj = {
//   name: "John",
//   sayHi: function () {
//     console.log(this); // obj
//     function inner() {
//       console.log(this); // globalObject
//     }
//  const fn = () => {
//   console.log(this); // globalObject
// };
// fn(); // globalObject
// inner(); inner() is a regular function (not a method of obj). So, it has its own this. The value of this is not passed to the inner function so it will be globalObject
//   },
// };

// obj.sayHi(); // obj
// this inside nested functions☑️

// this inside DOM event handlers
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   console.log(this); // button
// });
