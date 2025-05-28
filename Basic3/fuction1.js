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


// ----------------FUNCTION AND OBJECT USE-----------------------------------------------------------

// when we making the product cart type project we have to add the product price after adding it into cart so we use their rest operator(...) to take all the add products value 
// here type sefty will be checked bcz many time it have the problem of type sefty so we have to use the rest operator to take all the value in the array and then we can use it in the function
function calculateTotalPrice(...prices) {
    // body of function
   return prices

}
console.log(calculateTotalPrice(100, 200, 300)); // Output: [100, 200, 300]
// it give array of all the product added and then use loops to get the total value

// Example of function with object
function createUser(name, age) {
    // body of function
    return {
        name: name,
        age: age
    };
}
// function calling
console.log(createUser("John", 30)); // Output: { name: 'John', age: 30 }


// now undersatnd to use the object in the function\
// for this we have to create object an dthen giving it into the argument of the function
const MyObj={
    name: "Alice",
    age: 25
}
function createUserObject(user) {
    // body of function
    return `Name: ${user.name}, Age: ${user.age}`;
}
// function calling
console.log(createUserObject(MyObj)); // Output: Name: Alice, Age: 25
// this will be also used there
console.log(createUserObject({name: "Bob", age: 30})); // Output: Name: Bob, Age: 30


// here 1. Function ke Scope ko Samajhna Zaroori Hai
// JavaScript me function ke andar sirf wahi cheezein accessible hoti hain jo:

// uske scope me ho (yaani function ke andar ya uske upar ke scope me defined ho), ya

// function ke arguments ke zariye pass ki jaati hain.


// also use the array in function


const arr = [1, 2, 3, 4, 5];

function sumArrayElements(array) {
    console.log("Array elements are: " + array[2]);
}
// function calling
sumArrayElements(arr); // Output: Array elements are: 3
// also done in this way by without using any variable name 
sumArrayElements([10, 20, 30, 40, 50]); // Output: Array elements are: 30