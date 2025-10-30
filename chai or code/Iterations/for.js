// for loop 


for (let i = 0; i < 5; i++) {
    console.log(i);
}// Output: 0 1 2 3 4

// The for loop is a control flow statement that allows code to be executed repeatedly based on a condition.
// It consists of three parts: initialization, condition, and increment/decrement.
// The initialization step is executed once at the beginning of the loop, where you can declare and initialize a loop variable.
// The condition is checked before each iteration, and if it evaluates to true, the loop body is executed.
// The increment/decrement step is executed after each iteration, allowing you to update the loop variable.
// The loop continues until the condition evaluates to false.
// Here's a breakdown of the for loop syntax:

// for (initialization; condition; increment/decrement) {
//     // Loop body: code to be executed in each iteration
// }

// Example of a for loop that iterates through an array:

let fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
} // Output: apple banana cherry

// example of print values 

for(let i = 0 ; i<=10 ; i++){
    console.log(i);
} // Output: 0 1 2 3 4 5 6 7 8 9 10

// nested loop 

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
} // Output: i: 0, j: 0
// Output: i: 0, j: 1
// Output: i: 1, j: 0
// Output: i: 1, j: 1
// Output: i: 2, j: 0
// Output: i: 2, j: 1

// an example which prints the table 

for (let i = 1; i <= 10; i++) {
    for(let j=0 ;j<=10 ; j++){
        console.log(`${i} x ${j} = ${i * j}`);
    }
} 

// break and continue keyword 
// The `break` statement is used to exit a loop prematurely, while the `continue` statement skips the current iteration and moves to the next one.
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        break; // Exit the loop when i is 2
    }
    console.log(i);
} // Output: 0 1

// The `continue` statement skips the current iteration and continues with the next one.
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // Skip the iteration when i is 2
    }
    console.log(i);
} // Output: 0 1 3 4

// The `for` loop is a powerful control flow statement in JavaScript that allows you to execute a block of code repeatedly based on a specified condition. It is particularly useful when you know the number of iterations in advance or when you want to iterate over arrays or collections.
// The `for` loop can also be used with the `break` and `continue` statements to control the flow of execution within the loop.
// The `break` statement allows you to exit the loop prematurely, while the `continue` statement skips the current iteration and moves to the next one.
// This flexibility makes the `for` loop a versatile tool for various programming tasks, such as iterating through arrays, performing calculations, or processing data in a structured manner.
// In summary, the `for` loop is a fundamental control flow statement in JavaScript that enables you to execute code repeatedly based on a condition, making it an essential tool for developers when working with iterative tasks