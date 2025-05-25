// declaration of function


// fuction Function_name (parameter1, parameter2, ...) {
        //  method
//     // body of function

// }
// fuction_name (argument1, argument2, ...); // function calling 

// some problem you must know 

function addTwoNumbers(a, b) {
    // body of function
    console.log("The sum is: " + (a + b));
}

// function calling
const c =addTwoNumbers(5, 10); // Output: The sum is: 15
console.log(c); // Output: undefined, because the function does not return a value


// concept of return :-  before return all thing are executed and after return nothing is executed in the function.
// return is important because of the function can return a value to the caller, allowing the result of the function to be used elsewhere in the code. 
// Agar return nahi hoga to function undefined return karega. fuction kuchh return hi nahi karega to uski value kahi pe use nahi kar payenge
// Example of function with return value

// user = guest because of it when nothing will be passed to the function it will take guest as default value
function loginUserMessage(username = "Guest")  {
    return `Welcome ${username} to our website!`;
}
loginUserMessage(); //its value is welcome Guest to our website! but its not printed so it is not shown in the output
console.log(loginUserMessage()); // Output: Welcome Guest to our website!
console.log(loginUserMessage("ram")); // Output: Welcome ram to our website!

// right method
function add(a, b) {
    // body of function
    return a + b;
}
// function calling
let result = add(5, 10);
console.log(result); // Output: 15
