// Declaration 

const name = "ram";
const repoCount = 10;

// not preffer to use 
console.log(name + " has " + repoCount + " repositories");

// this is using in modern javascript is called the string interpolation
console.log(`My name is ${name} and I have ${repoCount} repositories`);

// methods to iniitialize string

const str = "hello world";

const gameName = "Call of Duty";

const gameName2 = new String("Call of Duty");

console.log(gameName[0]);//both metjod convert the data into object form in console watch it once 


// exmaple  {
//     0: "C",
//     1: "a",
//     2: "l",
//     3: "l",
//     4: " ",
//     5: "o",
//     6: "f",
//     7: " ",
//     8: "D",
//     9: "u",
//     10: "t",
//     11: "y",
// }

console.log(gameName2[0]);//both metjod convert the data into object form in console watch it once
console.log(gameName2.toUpperCase());
console.log(gameName2.toLowerCase());
console.log(gameName2.charAt(0));
console.log(gameName2.length)
console.log(gameName2.indexOf("o"));//it will return the first index of the letter

// Important methods in string 

console.log(gameName2.substring(0, 4));//it will return the string from 0 to 4 index


console.log(gameName2.slice(-6, 4));//it will return the string from 0 to 4 
console.log(gameName2.slice(-2));

const numbers = [1, 2, 3, 4, 5];

const slice1 = numbers.slice(1, 4); // Returns [2, 3, 4]
const slice2 = numbers.slice(2); // Returns [3, 4, 5]
const slice3 = numbers.slice(-2); // Returns [4, 5]
const slice4 = numbers.slice(1, -1); // Returns [2, 3, 4]
const slice5 = numbers.slice(); // Returns a copy of the entire array: [1, 2, 3, 4, 5]

const text = "Hello, World!";

const slice6 = text.slice(0, 5); // Returns "Hello"
const slice7 = text.slice(7); // Returns "World!"
const slice8 = text.slice(-6, -1); // Returns "World"


// trim

const str1 = "   Hello World!   ";
const trimmedStr = str1.trim(); // "Hello World!"
// without trim '    Hello World!   '
console.log(trimmedStr)
// replace 

const str2 = "Hello World!";
const replacedStr = str2.replace(" jisko replace karna ", "kisse replace karna hai"); // "Hello JavaScript
const replacedStr1 = str2.replace(" ", "-"); // "Hello JavaScript

console.log(replacedStr1);

const url = "https://www.example.com";
console.log(url.includes('hitesh'))

url.split("saparator", limit )