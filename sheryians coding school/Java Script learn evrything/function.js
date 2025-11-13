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