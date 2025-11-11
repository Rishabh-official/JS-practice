// variables 
// var, let, const

var name = "Sheryian"; // function scoped
let age = 25; // block scoped
const country = "USA"; // block scoped and cannot be reassigned

// declaration of vriable 

var a; // undefined
var a = 10; // initialization
let b; // undefined
b = 20; // initialization
const c = 30; // must be initialized at declaration
// c = 40; // Error: Assignment to constant variable

// problems with var 

// window me add hota hai 
// function scoped hai 
// fir se declare kar sakte hai same name se and error nhi deta

// SCOPE
// Global Scope, Block Code, Function Scope

// Global Scope
var globalVar = "I am global";
// pure code me kahi par bhi usko acces kar sakte hai
// open space me likha ho curly braces na ho tab vo global space me rahega 

// Block Code
{
    let blockVar = "I am block scoped";
    const blockConst = "I am also block scoped";
    // console.log(globalVar); // Accessible
    // console.log(blockVar); // Accessible
}
// block ke ander hi access ho ta hai let me 
// let block scope ko follow kartaa hai but var fuctional scope hai to vo nhi karta follow isko 

// console.log(blockVar); // Error: blockVar is not defined

// Function Scope
function myFunction() {
    var funcVar = "I am function scoped";
    console.log(globalVar); // Accessible
    console.log(funcVar); // Accessible
}

myFunction();
// console.log(funcVar); // Error: funcVar is not defined

// fuction ke under hi usko access kar sakte hai uske bahar usko us perticular variable ko acess nahi kar sakte 



// temporal dead Zone

// ek aisa zone jaha par hum variable ko access nahi kar sakte jab tak ki vo declare na ho jaye
// utna area jitna me js ko pata hai ki variable exist karta hi par wo aapko value nhi de sakta hai 

// let & const me hota hai ye var me nahi hota hai 


// hoisting 
// ek variable ko jab js me bante hai to wo variable do hisso me toot jata hai and uska declared part upar chala jata hai and uska initialization neeche reh jata hai

// example

var x = 5; // declaration and initialization

// hoisting 

var x = undefined; // declaration hoisted
console.log(x); // undefined  kyoki hoisting ho rha is liye value undefined hai
x = 5; // initialization stays here


// let or const bhi use karta hai lekin usme kuchh problem hai vo jab tak initilaize nahi hote hai vo perticular varible tab tak vo temporal dead zone me chala jata hai

console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10; // declaration and initialization
// hoisting
let Zone; // declaration hoisted
// console.log(z); // ReferenceError: Cannot access 'y' before initialization

// practice 

// 1
console.log(a1); // undefined  bcz of hoisting
var a1 = 10;

// 2
console.log(b1); // ReferenceError: Cannot access 'b1' before initialization
let b1 = 20;
// 3
var x=1 ;
if(true){
    var x=2 ;
    console.log(x) ; //2
}
// because the var is the function scope so v ar x=2 will override the var x=1 or ye black scope ko respect nahi karta hai 

// 4

let a =10;
{
    let a =20 ;
    console.log(a) ; //20
}
console.log(a) ; //10

// kyoki let block scope ko follow karta hai to isme block ke ander wali value print hogi pehle or baad me bahar wali value print hogi

// confusion occurs 

// constant me sirf value upadate ho skati hai na ki reassign ho skati hai