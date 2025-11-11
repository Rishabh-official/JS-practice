// control flow
// 1. if, else, else if
if (true) {
    console.log("This is true");
} else {
    console.log("This is false");
}
let age = 18;
if (age < 13) {
    console.log("Child");
}
else if (age >= 13 && age < 20) {
    console.log("Teenager");
}
else {
    console.log("Adult");
}

// 2. switch case
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// 3. early return pattern
function checkNumber(num) {
    if (num <= 0) {
        console.log("Number is not positive");
        return;
    }
    console.log("Number is positive");
}
checkNumber(-5);
checkNumber(10);

// example
function getValue(val){
    if(val<25) return "D";
    else if(val<45) return "C";
    else if(val<65) return "B";
    else if(val<85) return "A";
    else return "A+";

}
console.log(getValue(10));  // D
console.log(getValue(35));  // C
console.log(getValue(55));  // B
console.log(getValue(75));  // A
console.log(getValue(95));  // A+
// output D C B A A+

// Question
// write a function getGrade(score) that :
//  ..takes a student marks (0 to 100)
//  ..Returns the Grade based on this logic:
//  90-100 A+
// 80-89 A
// 70-79 B
// 60-69 C
// 33-59 D
// 0-32 fail
// anything else is "Invalid Score"

function getGrade(score){
    if(score<=100 && score>=90) return "A+";
    else if(score<90 && score>=80) return "A";
    else if(score<80 && score>=70) return "B";
    else if(score<70 && score>=60) return "C";
    else if(score<60 && score>=33) return "D";
    else if(score<33 && score>=0) return "Fail";
    else return "Invalid Score";
}
console.log(getGrade(73));


//  ROCK PAPER SCISSORS LOGIC

function rps(user , computer){
    if(user===computer) return "draw";
    if(user==="rock" && computer==="scissor") return user;
    if(user==="scissor" && computer==="paper") return user;
    if(user==="paper" && computer==="rock") return user;
    return computer;
}
console.log(rps("rock","paper"));