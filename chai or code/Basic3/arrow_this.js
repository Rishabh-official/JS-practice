// this keyward
// it referes current context 

const user = {
    username : "rishabh",
    price : 999 ,

    welcomeMessage : function(){
        console.log(`${this.username},welcome to website`) //here we use this keyword to refer the current context of the object 
    }
}
user.welcomeMessage() // rishabh,welcome to website 
user.username = "sam";
user.welcomeMessage()//sam,welcome to website


// here in node environment there is no any declared anything except the user object so it gives the empty object {}

console.log(this) // {}


// but when we check in browser it gives the window because their is in browser the global scope the windows function are thier so that will refer the window 
// in browser global scope 
console.log(this) // windows 


// function ke under this 

const one = function (){
    console.log(this);
}
one();//it gives lots of thing 

const o = function (){
    const username = "bhau"
    // it give undefine
    console.log(this.username); // this is not accessable but this method was used in object but not here 
}
o(); // ye is liye kar rah hai kyoki ye current global context ko target kar raha hai 

// Function ke andar this ka use hota hai, lekin this kis cheez ko point karega, wo depend karta hai function ko kaise call kiya gaya hai.

// arrow function declartion 
// explicite return 
const chai = ()=>{
    let username = "hero"
    console.log(this)
}
chai() //{}

// jab curly braces lagate hai to return likhna hi padta hai 
// lekin jab ham curly braces hata dete or paranthisis lagate hai to usme nahi likhana padta hai 

// implisite return 

const add = (num1 , num2) => num1 +num2 
const add2 = (num1 , num2) => (num1 +num2) 
console.log(add(5,4)) //9
console.log(add2(5,4))//9

// object passing 
const add3 = (num1, num2) => ({username : "ram"})
console.log(add3()) //{ username: 'ram' }

// witrhout wraping it into paranthisis the object can not used here 