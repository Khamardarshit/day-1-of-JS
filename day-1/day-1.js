console.log("Hello, welcome to Day 1 of JavaScript learning!");
alert("This is your first JavaScript alert!");

let name = prompt("Please enter your name:");

console.log("Hello, " + name + "! Nice to meet you.");

// other  mathed
// console.log(`Hello, ${name}! Nice to meet you.`);
document.getElementById("dom").innerHTML =  `Hello, ${name}! Nice to meet you.`;

// 3️⃣ Variables: var, let, const

var age = 25; // function-scoped variable
var age = 30; // redeclaration is allowed
age = 35;

let city = "New York"; // block-scoped variable
// let city = "Los Angeles"; // redeclaration is NOT allowed
city = "Los Angeles";

const country = "USA"; // block-scoped constant
// country = "Canada"; // reassignment is NOT allowed   
// const country = "Canada"; // redeclaration is NOT allowed

console.log("Age:", age);
console.log("City:", city);
console.log("Country:", country);