// IIFE (Immedeately involked function expession)

// it is used for immedeatelly involke the function 

// for interview percepective this will be more good answer

// global scope se problem hoti hai kai bar to use dur karne ke liye IIFE ka use karte hai

// ()() syntax kuchh is type ka hoga 

// code 

(function one(){
    console.log("one")
})();

// important very imp that run two iife's 

// here the error throws because hamne iife one ko end hi nahi kiya tha usko kab rukna hai ye pata hi nahi is liye vo error aa rha hai 
// we have just put the semicolon after the iife to end this (moost of the time interview me yahi par galti karte hai log)
(function Two(){
    console.log("two")
})();
(function three(){
    console.log("three")
})();

// there are two type of iife named or simple iife

// name iffe
(function NamedIife(){
    console.log("Namedd iife")
})();
// simple iife
(()=>{
    console.log("simple iife")
})();



// ---------------Working of javascript ----------------------------

// ye three phases me hoti hai 

// step 1. )   sabse pahle global ececution context hota hai vo initialize karta hai jo this keyword variable ke ander refer kar dete hai 
// 3 type ke executional context hote hai 
// 1.)global executional context
// 2.)Functional executional context
// 3.)eval executional context(global ke ander hi aata hai lekin mangoos explore karne pe milta hao)

// code run hota hai 2 phase me 
// 1 memory phase
// 2 exection phase 

//  1 . memory phase :- memory phase me pahle code ki memory management hiti hai jitne bhi variables hote hai sabko undefined value feed karte hai or jitne bhi fuc=nction hote hai unko defination jo hota hai code me vo de dete hai

//  2 . execution phase :- execution phase me execute hota hai function usee value milti hai 
// function execution alag trah se hota hhai har ek function ke liye ek alag {new execution context }banta hai jo 2 chij feed karke rakhta hai 
// new variable environmentt + execution thread
// then inside this the memory again the memory and execution phase done 


// call stack :- exection of functions is take place herre the code function is inside the fi=unction and at the bottom of the stack global execution and above this functions are called and excuted 

// thier is LIFO concept take place