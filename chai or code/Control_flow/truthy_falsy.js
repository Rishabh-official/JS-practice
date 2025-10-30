// truthy values are value which is determined to be true in a boolean context
const isActive = true; // Example value
// falsy values are value which is determined to be false in a boolean context
const value = 0; // Example value

const userEmail = "hello"
if (userEmail) {
    console.log("Email is provided");
}
else {
    console.log("Email is not provided");
}
// Truthy value example 
if (isActive) {
    console.log("The user is active");
}
else {
    console.log("The user is inactive");
}
// Falsy value example
if (value) {
    console.log("Value is truthy");
}
else {
    console.log("Value is falsy");
}
// Falsy values in JavaScript
const falsyValues = [0, -0, "BigInt 0n" , "", null, undefined, NaN, false];
console.log("Falsy values in JavaScript:", falsyValues);

// Truthy values in JavaScript
const truthyValues = [1, "Hello", "space inside string" ," ",  {}, [], true , "empty function" , function() {}];
console.log("Truthy values in JavaScript:", truthyValues);


// Checking truthy and falsy values using boolean coercion
function checkValue(val) {
    if (val) {
        console.log(`${val} is truthy`);
    } else {
        console.log(`${val} is falsy`);
    }
}
// Example usage
checkValue(42); // 42 is truthy
checkValue(""); //  is falsy
checkValue(null); // null is falsy
checkValue([]); // [] is truthy
checkValue({}); // {} is truthy

checkValue(false); // false is falsy
checkValue("Hello"); // Hello is truthy
checkValue(0); // 0 is falsy

// how to check empty array

const array = [];
if (array.length === 0) {
    console.log("The array is empty");
}

// how to check empty object

const obj = {};
if (Object.keys(obj).length === 0) {
    console.log("The object is empty");
}

// how to check empty string
const str = "";
if (str.length === 0) {
    console.log("The string is empty");
}

// how to check empty function
function emptyFunction() {}
if (emptyFunction.toString().trim() === "function() {}") {
    console.log("The function is empty");
}

// how to check empty map
const map = new Map();
if (map.size === 0) {
    console.log("The map is empty");
}

// INTERVIEW BASIC QUESTIONS
// 1. What are truthy and falsy values in JavaScript?
// Truthy values are values that evaluate to true in a boolean context, while falsy values evaluate to false. Examples of truthy values include non-zero numbers, non-empty strings, and objects. Falsy values include 0, "", null, undefined, NaN, and false.
// 2. How can you check if a value is truthy or falsy in JavaScript?
// You can check if a value is truthy or falsy using an if statement. If the value evaluates to true, it is truthy; otherwise, it is falsy. For example:
// if (value) {
//     console.log("Value is truthy");
// } else {
//     console.log("Value is falsy");
// }
// 3. What are some common truthy and falsy values in JavaScript?
// Common truthy values include non-zero numbers, non-empty strings, objects, and arrays. Common falsy values include 0, "", null, undefined, NaN, and false.
// 4. How can you check if an array is empty in JavaScript?
// You can check if an array is empty by checking its length property. If the length is 0, the array is empty:
// const array = [];
// if (array.length === 0) {
//     console.log("The array is empty");
// }
// false ==  0; // true
// false == ""; // true
// false == null; // true
// false == undefined; // true
// false == NaN; // false
// false == false; // true
// false == []; // true
// 0 == ""; // true
// 0 == null; // true
// 0 == undefined; // true
// 0 == NaN; // false