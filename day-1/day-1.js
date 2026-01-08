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



// 4️⃣ Data Types: String, Number, Boolean, Object, Array, Null, Undefined

// number
let num = 42;
console.log("Number:", num);
console.log("Type of num:", typeof num);

// string
let str = "Hello, World!";
console.log("String:", str);
console.log("Type of str:", typeof str);

// boolean
let bool = true;
console.log("Boolean:", bool);
console.log("Type of bool:", typeof bool);

// undefined
let undef;
console.log("Undefined:", undef);
console.log("Type of undef:", typeof undef);

// null
let nul = null;
console.log("Null:", nul);
console.log("Type of nul:", typeof nul); // Note: this will return 'object' due to a quirk in JavaScript

// object
let obj = { name: "Alice", age: 30 };
console.log("Object:", obj);
console.log("Type of obj:", typeof obj);

// array
let arr = [1, 2, 3, 4, 5];
console.log("Array:", arr);
console.log("Type of arr:", typeof arr);
