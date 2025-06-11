// while loop
// The `while` loop is used to execute a block of code repeatedly as long as a specified condition evaluates to true.
// It checks the condition before executing the loop body, and if the condition is false, the loop is skipped entirely.
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
} // Output: 0 1 2 3 4
// Example of a while loop that prints numbers from 0 to 4
// The `do...while` loop is similar to the `while` loop, but it guarantees that the loop body is executed at least once before checking the condition.
let number = 0;
do {
    console.log(number);
    number++;
}
while (number < 5); // Output: 0 1 2 3 4
// Example of a do...while loop that prints numbers from 0 to 4
// The `do...while` loop is useful when you want to ensure that the loop body is executed at least once, regardless of the condition.
// Here's a breakdown of the `while` and `do...while` loop syntax:
//
// `while` loop syntax:
// initialization
// while (condition) {
//     // Loop body: code to be executed in each iteration
//     // increment and Decrement
// }
//
// `do...while` loop syntax:
// initialization
// do {
//     // Loop body: code to be executed in each iteration
//     // increment and Decrement 
// } while (condition);
//


// while lopp example 
let i=0;
while(i<=10){
    console.log(i)
    i++
}

// array 
let array = ["flash","batman","supeerman"]
let index = 0;
while(index<array.length){
    console.log(`${array[index]}`) // agar index print nahi karta hu to usme pura array bar bar comma saparation se print hoga 

    index++;
}



// do while loop example
let j = 0;
do {
    console.log(j);
    j++;
}while (j < 5); // Output: 0 1 2 3 4
// Example of a do...while loop that prints numbers from 0 to 4
// The `do...while` loop ensures that the loop body is executed at least once, even if the condition is false initially.
let k=5;
do{
    console.log(k);
    k++;
}
while(k<5); // Output: 5
