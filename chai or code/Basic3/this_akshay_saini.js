// source
const a = console.log ("https://youtu.be/9T4z98JcHR0?si=x0WsR203YD8teOhe");

// this in global scope 
console.log(this)//global object 
// according to the environment the global object will chnaged for browser window, for node Global object;

// their are two  modes in js strict mode and non strict mode 

// this inside a function 
function x(){
    console.log(this)
}
x();
// here the function gives different things in different modes 
// in strict mode give undefined
// but in non strict mode gives window 


// this in strict mode (this substitution) (reason whys in function show that result )

// if the value of this is undefined or null.{strict mode}
// this keyword will replaced with global object only in non strict mode {non strict mode}


// \\ this keyword value depends on how function called (window )

// type of calling function
// 1. x()
// 2. window.x()
//  3. obj.x() different way to calling fuctions 

// x() ---> undefined
// window.x() ----> it giives window 

// this inside the object

const obj ={
    a:10,
    x:function(){        //x is method becaause the function is declarredd inside the object
        console.log(this)
    }
}
obj.x();




// call ,apply , bind methods {Sharing methods }

// go to call ,apply,bind file in which very detailed form discussion

// this inside the arrow function 

// arrow function has no concept of binding this keyword 
// it just refer to the enclosed lexical context 
// lexical context :- it means how the code is written who is its surrounding 

// ex:- 

const One ={
    a:10,
    x:()=>{
        console.log(this)
    }
};
One.x(); //{} give emppty object
// it refers global object because its surrounding is global on=bject 

const obj2 ={
    a :20,
    x: function (){
        const y = ()=>{
            console.log(this)
        }
        y()
    }
}

obj2.x() // referes to the obj2
// here fuction y is not a method here it is just a function which is surround by the method x which referes the obj 2
// fuction y is llexically enclosed by the fuction x

//  this in DOM 

//  in DOM the this keyword refers to the its tag 
// in which there the this keywoard used its targets that html tag (element)

// example
// {/* <button onclick = alert(this)> click me </button> */} after the clicking the button the alert message show thAT TAG NAME 