// this section is bit lengthly 

// what is function & why function is used?

// when we write any code they immediatly runs. but when we have to use taht line of code when wee click or make to use that code. then that time functtion is came to us and provide the ability to use that code after a specific action.

// why
// when we use function the Code is optimized because the perticular code is not repeat in the over all code . we just call a function ko run that code . (because of it the code become optimized)


// function declaration rules:--
// the name of function can not started from 
//   1.  by a number 
//  2.  by special character except _ and $
//  3.  by space
//  4.  by reserved keywords like var , let , const , function , return etc
//  5.  function name should be meaningful
//  6.  function name should be in camelCase
//  7.  function name is case sensitive
//  8.  function name can be of any length
//  9.  function name can be alphanumeric
//  10. function name should not be same as variable name in the same scope
//  11. function name should not be same as another function name in the same scope
//  12. function name should not be same as built-in function name in the same scope
//  13. function name should not be same as object name in the same scope
//  14. function name should not be same as array name in the same scope


// 1. function declaration / statement

function abcd(/*parameters if any*/){
    //code to be executed
}
abcd(/* arguments */); // function call

// 2. function expression

let a = function(){
    // code to be executed
}
a(); // function call

// 3. fat arrow function

// 3.1 statment
 ()=>{}
// 3.2 expression
    let b = ()=>{}
    b(); // function call
// 3.3 with parameters
    let c = (x,y)=>{
        return x + y;
    }
    console.log(c(5,3)); // function call
// 3.4 with single parameter
    let d = x => x * 2;
    console.log(d(5)); // function call
// 3.5 without parameters
    let e = () => console.log("Hello World");
    e(); // function call
// 3.6 multi line function
    let f = (x,y) => {
        let sum = x + y;
        return sum;
    }
    console.log(f(5,3)); // function call
// 3.7 implicit return
    let g = (x,y) => x - y;
    console.log(g(5,3)); // function call


// parameters vs arguments

// parameters are the variables that are defined in the function declaration (asan sabdo me  parameters is a value which is given to the function at the time of declaration)

// arguments are the values that are passed to the function when it is called (asan sabdo me arguments is a value which is given to the function at the time of calling)

let hello = function(val1,val2){ 
    console.log("Hello " + val1 + " " + val2);
}
hello("John","Doe"); // John and Doe are arguments

// val1 and val2 are parameters
// John and Doe are arguments

// Default parameter

// jab hum koi argument pass nhi karte hai to function call hone pe humko ya to undefined milega ya to NaN milega. is problem ko solve karne ke liye hum default parameter ka use karte hai.

// example ki kaise NaN milega or Kaise undefined milega
function add(a,b){
    return a + b;
}
console.log(add()); // NaN
//  yaha NaN aane ka reasion ye tha ki humne koi argument pass nhi kiya to dono parameter undefined ho gaye or undefined + undefined = NaN hota hai

function add1 (a,b){
    console.log("Value of a is " + a);
    console.log("Value of b is " + b);
}
add1(); //yaha par output me dono parameter ki value undefined aayegi kyuki humne koi argument pass nhi kiya

// ab hum default parameter ka use karte hai
function add2 (a=0,b=0){
    return a + b;
}
console.log(add2()); // 0
// yaha par humne default parameter ka use kiya to jab humne koi argument pass nhi kiya to dono parameter ki value 0 ho gayi or 0 + 0 = 0 hota hai
console.log(add2(5)); // 5
// yaha par humne ek argument pass kiya to pehla parameter ki value 5 ho gayi or dusra parameter ki value default parameter ke karan 0 ho gayi or 5 + 0 = 5 hota hai
console.log(add2(5,3)); // 8
// yaha par humne dono argument pass kiya to dono parameter ki value argument ke karan hi ho gayi or 5 + 3 = 8 hota hai

// rest operator 
// jab humko pata nhi hota ki kitne argument pass honge to hum rest operator ka use karte hai. rest operator 3 dots (...) se bana hota hai or ye last parameter me hi use hota hai.
function sumAll(...numbers){
    let sum = 0;
    for(let num of numbers){
        sum += num;
    }
    return sum;
}
console.log(sumAll(1,2,3)); // 6
console.log(sumAll(1,2,3,4,5)); // 15
console.log(sumAll(10,20,30,40,50,60)); // 210

// ye rest operator humko ek array deta hai 
// jab argument kai saare ho to humein utne hi parameter banane padega, issey bachne ke liye , hum rest ka use karte hain , agar (...) function ke parameter space me lage to wo rest operator hai
// or dusri jaagh use ho to wo spread operator hai

// example
function abcd(a,b,c,...val){
    console.log(a,b,c,...val);
}
abcd(1,2,3,4,5,6,7,8);

// Return values & Early Return 
// return :  jaha se aaye ho vahi dal dunga
// return hamesha function ke ander hoga. 

function a(){
    return 12;
}
a(); // ye return value 12 hai vo yaha pe aayega or ispe feed hoga
// return statement function ke execution ko rok kar koi value wapis bhejta hai jahan se function call hua tha.

function add(a, b) {
    return a + b;   // yahan function result bhej deta hai
    console.log("ye kabhi nahi chalega"); // unreachable code
  }
  
  console.log(add(3, 5)); // 8

  

// early return :- kuchh condition rahega usko dekhakar return karta hai
// early return ka matlab hota hai function ke beech me hi jaldi return kar dena, jab hume pata chal jaye ki aage code chalane ki zarurat nahi hai.
function divide(a, b) {
    if (b === 0) {
      return "Error: Division by zero"; // early return
    }
  
    // agar yahan tak aya, matlab b 0 nahi hai
    return a / b;
  }
  
  console.log(divide(10, 0)); // "Error: Division by zero"
  console.log(divide(10, 2)); // 5


// FIRST CLASS FUNCTION 
// it is concept of function jo ki kahta hai function ko variables ki values ki tarah treat kar sakte hai 
// jaha jaha value di ja sakti hai , vaha vaha function bhi as a value di ja saskti hai 
// yahi first class function ka concept hai 

// example
let r = function(){} // ye function ko variable me store kar raha hai
// yaha hum r ki value me fuction ko value ki tarah le raahe hai matlab ye first order function hoga 

function t(val){

}
t(function(){}); // yaha hum function ke parameter me function ko argument ki tarah de rahe hai
// yaha bhi hum function ko value ki tarah use kar rahe hai


// HIGHER ORDER FUNCTION (HOF)
// jo function dusre function ko as a parameter leta hai ya fir function ko return karta hai use higher order function kehte hai    

function hof(func){
    func();
}
hof(function(){
    console.log("Hello from higher order function");
}
);


// pure & impure function
// pure function :  jo function same input pe hamesha same output de , or jiska koi side effect na ho use pure function kehte hai
// asan bhasa me aisa function jo ki bahar ki value ko change na kare or hamesha same input pe same output de use pure function kehte hai

function pureAdd(a, b) {
    return a + b; // ye pure function hai
}
console.log(pureAdd(2, 3)); // 5
console.log(pureAdd(2, 3)); // 5
// impure function :  jo function same input pe alag alag output de sakta hai , ya fir jiska side effect ho use impure function kehte hai
// asan bhasa me aisa function jo ki bahar ki value ko change kare ya fir same input pe alag alag output de use impure function kehte hai
let count = 0;
function impureAdd(a) {
    count += a; // ye impure function hai
    return count;
}
console.log(impureAdd(2)); // 2
console.log(impureAdd(2)); // 4
console.log(impureAdd(2)); // 6


// Closures and Lexicaal scoping 

// closure :  jab ek function apne outer function ke variable ko access karta hai to use closure kehte hai
// detailedly :  jab ek funtion hai vo ek or function return kar rah ahai or jo return function ke ander parent function ke variable ko access kar raha hai to use closure kehte hai

function i(){
    let a = 10;
    return function(){
        console.log(a);
    }
}

// lexical Scoping :  jis block ka variable usi block ke ander access hota hai use lexical scoping kehte hai
// detailedly :  jab ek function apne parent function ke variable ko access karta hai to use lexical scoping kehte hai
// parent ke variable ko child function ke ander access karna lexical scoping hai but child function ke variable ko parent function ke ander access nahi kar sakte hai
function outer(){
    let outerVar = "I am from outer function";
    function inner(){
        console.log(outerVar); // lexical scoping
    }
    inner();
}
outer();

// IIFE (Immediately Invoked Function Expression)
// jab hum ek function ko define karte hai or uske turant baad hi usko call kar dete hai to use IIFE kehte hai
(function(){
    console.log("This is an IIFE");
})();
// or arrow function ke sath bhi IIFE bana sakte hai
(()=>{
    console.log("This is an IIFE using arrow function");
})();

// hoisting differences btween function declaration & function expression
// function declaration hoisting ke time pe pura function upar chala jata hai isliye hum function ko call kar sakte hai uske pehle bhi
hoistedFunction();
function hoistedFunction(){
    console.log("This function is hoisted");
}
// function expression hoisting ke time pe sirf variable declaration upar chala jata hai lekin uski value nahi chali jati isliye hum function ko call nahi kar sakte hai uske pehle
// unhoistedFunction(); // Error: unhoistedFunction is not a function
let unhoistedFunction = function(){
    console.log("This function is not hoisted");
}


// practice 

// 1. whats the differnece between declaration and expressions in the terms of Hoisting
// Answer: Function declarations are hoisted completely, meaning you can call them before they are defined in the code. Function expressions, on the other hand, are not hoisted in the same way; only the variable declaration is hoisted, not the assignment. Therefore, calling a function expression before its definition will result in an error.


// 2. pridict the output 

greet(); // Output: "Hello, World!"
function greet() {
    console.log("Hello, World!");
}
// because it is function hoisted so it gives the output

// 3. convert it into a arrow function?

// function multiply(a,b){
//     return a * b;
// }

let multiply = (a,b ) => a * b;
console.log(multiply(4,5)); // 20

// 4. identify parameters and arguments
function welcome(name){console.log(name);}
welcome("Alice");

// parameters: name
// arguments: "Alice"

// 5. how mant parameters does this function hav anf how many argumne are passed
function demo(a,b,c){
    console.log(a,b,c);
}
demo(1,2);
// parameters: 3 (a, b, c)
// arguments: 2 (1, 2)

// 6. pridict the output
  function SayHi(name="guest"){
    console.log("Hi " + name);
  }
    SayHi();
// Output: "Hi guest"
// because default parameter is used so it gives the output as guest

// 7. what does the ... operator mean in parameter
// Answer: The ... operator in parameters is known as the rest operator. It allows a function to accept an indefinite number of arguments as an array. This way, you can pass multiple values to a function without explicitly defining each parameter.

// ex.
function abcde(a,b,c, ...val){
    console.log(a,b,c,val);
}
abcde(1,2,3,4,5,6,7);
// Output: 1 2 3 [4, 5, 6, 7]

// 8. use rest paraameter to accept any numbers of scores and return the total
function totalScores(...scores){
    let total = 0;
    for(let score of scores){
        total += score;
    }
    return total;
}
console.log(totalScores(10,20,30)); // 60

// 9.fix the function using early return 
//  function checkAge(age){
//     if(age < 18){
//         console.log("Access Denied");
//     }
//     else{
//         console.log("Access Granted");
//     }
//  }
//  early return 
function checkAge(age){
    if(age<18) return "Access Denied";
    return "Access Granted";
}

// 10.
 function f(){
    return;
}
console.log(f());
// Output: undefined
// because function me return ke baad koi value nahi di gayi to by default undefined return hota hai

// 11. what does it mean when we say functions are first class citizens in javascript
// Answer: In JavaScript, functions are considered first-class citizens because they can be treated like any other variable. This means that functions can be assigned to variables, passed as arguments to other functions, returned from other functions, and stored in data structures. This flexibility allows for higher-order functions and functional programming techniques.

// 12. can you assign a function to a variable and then call it? show how?
let myFunction = function(){
    console.log("Function assigned to a variable");
}
myFunction(); // Function assigned to a variable

// 13. pass a function into another function and execute it inside
function executeFunction(func){
    func();
}
executeFunction(function(){
    console.log("Function passed as an argument");
}
);

// Output: Function passed as an argument

// 15. identify which one is higner order function .
// [1,2,3].map{ function (num){
//     return num * 2;
// }};
// Answer: The map function is a higher-order function because it takes another function as an argument and applies it to each element in the array.

// 16. pure v/s impure function
let total=0;
function addToTotal(num){
         total+=num;
}
// this is impure function because the value of total variable is increases because of the function so it is a imppure function

// 17. convert the above function into a pure function 

let Total=0;
function addToTotal(num){
    newTotal= Total;
      newTotal += num;
}

// now its become pure function the value of outer Total is not chnaged 

// 18. what is clouser ? when it is created:

//  a clouser is created when a function hass a variable inside and the function also returns the another function and the varible is used inside that returned function then the clouser is created 

    function clouser(){
        let clue=4;
        return function(total){
            clue+=total;
            console.log(clue);
        }
        
    }
    const w = clouser();
    w(10);

// 19. kya log karega 

function outer(){
    let count =0;
    return function(){
        count++;
        console.log(count);
    }
}
const con= outer();
con();
con();con();

// 20. convert this into normal function into an IIFE 
// funtion init(){
//     console.log("initialized");
// }

(function init(){
        console.log("initialized");
    })();

// 21. what is the use of IIFE? Nmae one real world  use case 

// private variable banane ke liye use hita hai 
// examople 

(function(){let val=0;})();
// console me val search karne per not initialized dikhata hai ki not exist karke 


// 22. what will be the output here and why ?
greet ();
var greet =function(){
 console.log("hi");
}
// here hoisting is allowed so the function is access that value 


// 23. 
greet();
function greet(){
    console.log("hi");
}
// output= hi
// because here the function is functin statement and function statement is allowed the hoisting



// 1. Write a function to calculate the square of a number
function square(num){
    return num * num;
}
console.log(square(5)); // 25
// 2. Write a function to check if a number is even or odd
function isEven(num){
    if(num % 2 === 0){
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(isEven(4)); // Even
console.log(isEven(7)); // Odd
// 3. Write a function to find the largest of three numbers
function largestOfThree(a,b,c){
    if(a >= b && a >= c){
        return a;
    } else if(b >= a && b >= c){
        return b;
    } else {
        return c;
    }
}
console.log(largestOfThree(5,10,3)); // 10
// 4. Write a function to reverse a string

function reverseString(str){
    let reversed = "";
    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("Hello")); // olleH


