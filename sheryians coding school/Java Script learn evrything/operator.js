// operators
// arithmetic 
// + - * / % ++ --

// comparison
// == != === !== > < >= <=

// logical
// && || !

// assignment
// = += -= *= /= %=

// unary
// typeof delete void

// ternory  
// condition ? expr1 : expr2

// arithmatic
console.log(5 + 3); // 8
console.log(5 - 3); // 2
console.log(5 * 3); // 15
console.log(5 / 2); // 2.5
console.log(5 % 2); // 1

// comparison
console.log(5 == '5'); // true
console.log(5 === '5'); // false
console.log(5 != 3); // true
console.log(5 !== '5'); // true
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 5); // true
console.log(5 <= 3); // false
// logical
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false
// assignment
let a = 5;
a += 3; // a = a + 3
console.log(a); // 8
a -= 2; // a = a - 2
console.log(a); // 6
a *= 2; // a = a * 2
console.log(a); // 12
a /= 3; // a = a / 3
console.log(a); // 4
a %= 3; // a = a % 3
console.log(a); // 1
// unary
console.log(typeof 5); // "number"
let obj = {name: "John"};
console.log(delete obj.name); // true
console.log(obj); // {}
console.log(void 0); // undefined
// ternary
let age = 20;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // "Yes"


// typeof vs instanceof
// typeof generally used in primitive data types 
// instanceof generally used in non-primitive data types like object arrays class 

console.log(typeof 42); // "number"
console.log(typeof 'hello'); // "string"
console.log(typeof true); // "boolean"
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof function(){}); // "function"
console.log([] instanceof Array); // true
console.log({} instanceof Object); // true
console.log(function(){} instanceof Function); // true



// summary
// Operators are symbols that perform operations on operands
// JavaScript has various types of operators including arithmetic, comparison, logical, assignment, unary, and ternary
// Understanding the differences between typeof and instanceof is crucial for type checking in JavaScript

// practice

// 1
let x=10; 
let y=20;
if (x<y && y>15){
    console.log("A");
}
else {
    console.log("B");
}
// output A

// 2
let isAdmin = true;
let isLoggedIn = false;
if(isAdmin || isLoggedIn){
    console.log("Access Granted");
}
else{
    console.log("Access Denied");
}
// output Access Granted

// 3
let temp = 35;
if (!(temp > 30)){
    console.log("It's Cool");
}
else{
    console.log("It's Hot");
}
// output It's Hot

// 4
let b=0;
if 
(a){
    console.log("Truthy");
}
else{
    console.log("Falsy");
}
// output Truthy

// 5
let score = 85;
let grade = (score >= 90) ? 'A' : (score >= 80) ? 'B' : (score >= 70) ? 'C' : 'D';
console.log(grade);
// output B

// practise increment and decrement problem they are bit confusing so take seriously
// end of code