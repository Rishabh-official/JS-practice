
// here all are in global scope
let a =10;
const b = 20;
var c=30;
// console.log(a); // Output: 10
// console.log(b); // Output: 20
// console.log(c); // Output: 30


// {} these curly brases are the scopes 

if (true) {
    let x = 5; // block scope variable
    const y = 10; // block scope constant
    var z = 15; // function scope variable
    console.log(x); // Output: 5
    console.log(y); // Output: 10
    console.log(z); // Output: 15
}
// console.log(x); // Error: x is not defined (block scope)
// console.log(y); // Error: y is not defined (block scope)
// its a problem so that var is not used in now days 
console.log(z); // Output: 15 (function scope, accessible outside the block) 


// -------------------------------Nested Scope---------------------------------

// nested scope concept based on icecream theory that agar koi chhota bachha kisi bade se icecream mange to use de dete hai but koi bada choote bachhe se incream mange to ye achha bhi nahi lagta hai or bachha icecream deta bhi nahi hai 

// In simple way that child can access the parents variables but parent cannot access childs 

function One(){
    const username = "rishabh"
    function two(){
        const website = "youtube"
        console.log(username); // child accessed parents variable
    }
    // console.log(website); // it throw error beacause of scope unaccessibility
    two()
}
One();


// same in nested if else 

if (true){
    const user = "rishabh"
    if(user === "rishabh"){
        const website = "    yt";
        console.log( user + website);
        
    }
    // console.log(website)//this is also throw error bcz it is outoff scope
}
// console.log(user) // it throws error because of it is out of scope

// -------------INTERESTING THING ABOUT HOSTING-----------------------------

// hosting is a method in which the execution tree of variable will be listed 

// here this type of method declaration of function their will be access of the fuction can be early the fuction declaration  it supports
// example

console.log(addOne(10))

function addOne(num){
    return num + 1;
}

// but this type of declaration it throws error that how we can earlier access the variable before declarating it it is an interesting thing keep remember this 
// it id not valid syntax 
// console.log(addTwo(10))
const addTwo = function(num){
    return num +2;
}
