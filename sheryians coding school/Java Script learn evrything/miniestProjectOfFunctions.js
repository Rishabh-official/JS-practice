// BMI Calculator

let bmi =function(weight,height){
    return weight/(height*height);
}
bmi(100,1.5).toFixed(2);
// 44.4


// create  a reuseable discount calculator (HOF)

function discountCalculator(discount){
    return function(price){
        return price - price*(discount/100);

    };
}
let ten = discountCalculator(10);
let twenty = discountCalculator(20);
console.log(ten(1000));
console.log(twenty(1000));



// build a counter using Clouser 


function counter(){
    let count=0;
    return function(){
        count++;
        return count;
    };
}


let c = counter();
let d = counter();
console.log(c());
console.log(c());
console.log(d());
console.log(c());
console.log(d());
console.log(c());

// har ek varibale ka counter alag alag store hota hai manage hota hai 

// create a pure function to transform a value 

function double(a){
    return a*2;
}
double(10);

// use IIFE to isolate variables

// private variable create kar pate hai jo ki function ke andar aceess ho jate hai lekin bahar nahi hote hai 

(function(){
    const password ="secrete password";
    console.log(password);
})();
console.log(password); // iska koi specific value nahi milta hai humko kuchh atpata sa hi answer milta hai 


// confusions 

// 1. Arrow v/s regular function this context

// --> jjab bhi function Banane honge vaha pe fat arrow function use ho skate haii 
// --> objects ke ander fat arrow use nahi karenge kyoki andar use karne pe this keyword value loose kar dega .

// ex //
const obj={
    value : 42,
    regular :function(){return this.value;},
    arrow: ()=> this.value
};


// 2. kab function ki hoisting hoti hai or kab TDZ?
// jab function declaration or statement hota hai tab hoisting place leta haai 
//example

ar();
function ar(){   // function declaration or statement method of declaration of a function
    console.log("bhalu");
}
// lekin jab function expression way me declare hota hai tab TDZ aata hai vaha pe hoisting nahi hita hai 

at(); // ye temporal deadzoone me chala gya hai kyoki let use hua hai 
 let at = function (){ // yaha pe ye function expressive way me declare hua hai isliye ye hoisting support nahi karta hai 
    console.log("hale luya");
 }

//  HOF(higher order function) v/s clouser

// HOF :-- HOF vo function hai jo ki ya to paraameter me ek function accept kare ya to ek of function return kare ya to dono bhi kar sakta hai 
 
function h(hee){
    return "hello";
}
h(function (){
    console.log("f");
});

// or 

let f = function (){
      return function (){
        console.log("hey");

      };
}
f();

// ya dono bhi ek sat rakh sakte hai 


// clouser :-- clouser em sirf itna hi difference hai jisme parent function ke under ek varible create kiye hai usi ke ander returned function me use parent me initialzed variable ka use kar diye the 
//  iske liye example

let a = function(){
    let r = 20;
    return function(){
        return r+=12;
    };
}
let b = a();
b();