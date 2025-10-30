//if(true) {}
// if(condition){
//     // do something
// }
if(true){
    console.log("hello mere bhai kya haal hai");
}

//conditions me basically comparisions hi hoti hai like == ,=== , < ,> <=,>= != ,!==

// when the if case got false condition after that the else case will be executed

const temprature = 30;
if(temprature > 30){
    let power= "on";
    console.log("It's a hot day");
}
else {
    console.log("It's not a hot day");
}
// console.log(`${power}`); // this will not accessed because power is defined in the if block and not in the else block 

// nested if else
const age = 20;
if(age >= 18){
    console.log("You can vote");
    if(age >= 21){
        console.log("You can drink");
    }
    else {
        console.log("You can't drink");
    }
}
// if else ladder
const marks = 75;
if(marks >= 90){
    console.log("Grade A");
}
else if(marks >= 80){
    console.log("Grade B");
}
else if(marks >= 70){
    console.log("Grade C");
}
else if(marks >= 60){
    console.log("Grade D");
}
else if(marks >= 50){
    console.log("Grade E");
}
else {
    console.log("Grade F");
}

// multiple conditional checking using logical operators
const isLoggedIn = true;
const isEmailVerified = false;
if(isLoggedIn && isEmailVerified){
    console.log("Welcome back!");
}
else if(isLoggedIn && !isEmailVerified){
    console.log("Please verify your email");
}
else {
    console.log("Please login");
}

// using or 
const isAdmin = false;  
if(isLoggedIn || isAdmin){
    console.log("You have access to the dashboard");
}
else {
    console.log("You don't have access to the dashboard");
}

// using ternary operator   
// syntax
// condition ? true : false

// example
const isMember = true;
const discount = isMember ? "20%" : "10%";
console.log(`Your discount is ${discount}`);

