// data type basically two types 

// 1. Primitive data types
// 2. Non-primitive data types (Reference)

// 1. Primitive data types
// a. Number
let num1 = 42;
let num2 = 3.14;
console.log(typeof num1); // "number"
console.log(typeof num2); // "number"

// b. String
// who has wrapped inside the single , double qoutes and the backtick
let str1 = "Hello, World!";
let str = 'heellp';
let b = `hey`;

// c. boolean
// true and false 
let t = true;
let f = false;

// d. null 
// those value is not decided initially but bad me uski kuchh na kuchh value hum usko denge 
let n = null;
console.log(typeof n); // "object" (this is a known quirk in     JavaScript)

// e. undefined
// those variable jiska koi value hi nahi hai
// ye sab js compiler ek random value deti hai jo ki undefines hota hai 
let u;
console.log(typeof u); // "undefined"

// f. Symbol
// used to create unique identifiers for objects
// basicaly kya hota hai jab hum koi external library use karte hai usme koi feild {name} clash na ho jaye or hum usko ko bahar update kar de to pura object hi change ho jata hai jo library hum use kar rahe to usko refect na kare is liye symbol ka use kar lete hai jo kii unique hota hai alag se baan deta hai object me usko repalce nahi karta hai ek or feild bana deta hai
let sym1 = Symbol('uniqueIdentifier');
let sym2 = Symbol('uniqueIdentifier');
console.log(sym1 === sym2); // false

// ex
let obj = {
    name: "Sheryians",
    age: 25
}
let sym = Symbol('id');
obj[sym] = 12345; // adding a symbol property
console.log(obj); // { name: 'Sheryians', age: 25, [Symbol(id)]: 12345 }
console.log(obj[sym]); // 12345
console.log(typeof sym); // "symbol"

// g. BigInt
// used for representing integers larger than 2^53 - 1
let bigIntNum = BigInt(9007199254741991);
console.log(typeof bigIntNum); // "bigint"
let bigIntNum2 = 9007199254741991n;
console.log(typeof bigIntNum2); // "bigint"

// adding two bigint number using this type 
let bigIntSum = bigIntNum + bigIntNum2;
console.log(bigIntSum); // 18014398509483982n
console.log(typeof bigIntSum); // "bigint"
// both number are bigint so they can perform any operation like addition ,subtraction etc


// 2. Non-primitive data types (Reference)
// kyoki ye refrence leytaa hai to ek me chnages karrte h to dusre me bhi replicate karta hai 

let a = [1,2,3,4,5];
let c = a; // b references the same array as a
c.pop();
console.log(a); // [1, 2, 3, 4]
console.log(c); // [1, 2, 3, 4]
// a. Object
let person = {
    name: "Alice",
    age: 30,
    isStudent: false
};
console.log(typeof person); // "object"
// accessing object properties
console.log(person.name); // "Alice"
console.log(person['age']); // 30
// adding a new property
person.city = "New York";
console.log(person.city); // "New York"

// b. Array
let numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers); // "object" (arrays are a type of object)

// accessing array elements
console.log(numbers[0]); // 1
console.log(numbers.length); // 5
// adding a new element
numbers.push(6);
console.log(numbers); // [1, 2, 3, 4, 5, 6]
// c. Function
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(typeof greet); // "function"
console.log(greet("Bob")); // "Hello, Bob!"


// dynamic typing 
// in other kanguage thier will be static typing system 
// example int a = 10 ;
// it says  a is of integer type
// but in js we can change the data type of variable at any time
let data = 42; // data is a number
data="Now I'm a string"; // data is now a string
data = true; // data is now a boolean
console.log(data); // true
// ye dynamic typing ki wajah se hi js me kuchh errors aate hai jo run time par pata chalte hai
// example
let value = "100";
let result = value + 50; // concatenation instead of addition
console.log(result); // "10050"
// to avoid this we can use type conversion
let numValue = Number(value); // convert string to number
let correctResult = numValue + 50; // now it's addition
console.log(correctResult); // 150
// type conversion
let strValue = String(123); // convert number to string
console.log(typeof strValue); // "string"
let boolValue = Boolean(1); // convert number to boolean
console.log(typeof boolValue); // "boolean"
// summary
// Primitive data types: Number, String, Boolean, Null, Undefined, Symbol, BigInt
// Non-primitive data types: Object, Array, Function
// Dynamic typing allows variables to hold values of any type and change types at runtime

// typeof quirks 
console.log(typeof null); // "object" (this is a known quirk in JavaScript)
console.log(typeof NaN); // "number" (NaN stands for Not-a-Number but its type is number)
console.log(typeof []); // "object" (arrays are a type of object)
console.log(typeof function(){}); // "function" (functions have their own type)
// to check array type
console.log(Array.isArray([])); // true
// to check null value
console.log(null === null); // true
// to check NaN value
console.log(Number.isNaN(NaN)); // true
// to check function type
console.log(typeof function(){} === 'function'); // true
// these quirks are important to remember when working with JavaScript data types

// type coercion
// automatic or implicit conversion of values from one data type to another
let mixedValue = '5' + 10; // string concatenation
console.log(mixedValue); // "510"
let coercedValue = '5' * 2; // string to number conversion
console.log(coercedValue); // 10
let boolCoercion = true + 1; // boolean to number conversion
console.log(boolCoercion); // 2
let nullCoercion = null + 5; // null to number conversion
console.log(nullCoercion); // 5
let undefinedCoercion = undefined + 5; // undefined to number conversion
console.log(undefinedCoercion); // NaN

// to avoid type coercion issues, it's best to use explicit type conversion
let explicitSum = Number('5') + 10; // explicit conversion
console.log(explicitSum); // 15


// truthy and falsy
// truthy values
let truthyValues = [1, -1, "hello", [], {}, function(){}];
truthyValues.forEach(value => {
    if (value) {
        console.log(`${value} is truthy`);
    }
});
// falsy values
let falsyValues = [0, "", null, undefined, NaN, false];
falsyValues.forEach(value => {
    if (!value) {
        console.log(`${value} is falsy`);
    }
});
// understanding truthy and falsy values is important for conditional statements and logical operations in JavaScript
// example
let userInput = ""; // empty string is falsy
if (!userInput) {
    console.log("No input provided"); // This will execute
}
// summary
// Type coercion can lead to unexpected results, so use explicit conversions when necessary
// Truthy values include non-zero numbers, non-empty strings, objects, arrays, and functions
// Falsy values include 0, "", null, undefined, NaN, and false


// practice
// true + false = 0+1= 1
// null + 1 = 1
// "5" - 2 = 3
// "5" + 2 = "52"
// undefined + 1 = NaN
// [] + {} = "[object Object]"
// {} + [] = 0
// !!"false" = true
// !!"" = false
// +"42" = 42
// parseInt("101", 2) = 5
// Number("   123   ") = 123
// String(100) = "100"

// Boolean([]) = true
// Boolean(0) = false
// Boolean("hello") = true
// Boolean("") = false


// why NaN is a number ?
// // NaN stands for "Not-a-Number", but in JavaScript, it is actually of the type "number". This is a quirk of the language.
// it know as failed operation ki tarah treat karta hai isliyee nuber me aata hai 

// end