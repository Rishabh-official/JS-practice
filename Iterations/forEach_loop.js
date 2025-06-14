// forEach loop
// The `forEach` loop is a method available on arrays that allows you to execute a function for each element in the array.
// It is a more functional approach to iterating over arrays compared to traditional loops.
// The syntax is as follows:
// array.forEach((element, index) => {
//     // what should be done with each element
// });
const array = [1, 2, 3, 4, 5];
array.forEach((element, index) => {
    console.log(`Element at index ${index}: ${element}`);
});
// Output:
// Element at index 0: 1
// Element at index 1: 2
// Element at index 2: 3
// Element at index 3: 4
// Element at index 4: 5
// Note: The `forEach` loop does not return a new array; it simply executes the provided function for each element.
// It is commonly used for side effects, such as logging or modifying external variables.

// it has a callback function which executed for each element in the array.
// The first parameter is the current element, and the second parameter is the index of that element.
// You can also use `forEach` with an optional third parameter, which is the array itself:

// for each loop take this information as well as we only use a single property which is (val , item,element)
array.forEach((element, index, arr) => {
    console.log(`Element: ${element}, Index: ${index}, Array: ${arr}`);
});
// Output:
// Element: 1, Index: 0, Array: 1,2,3,4,5
// Element: 2, Index: 1, Array: 1,2,3,4,5
// Element: 3, Index: 2, Array: 1,2,3,4,5
// Element: 4, Index: 3, Array: 1,2,3,4,5
// Element: 5, Index: 4, Array: 1,2,3,4,5

// Note: The `forEach` loop does not support `break` or `continue` statements, so it cannot be used to exit the loop early.
// If you need to exit the loop early, consider using a regular `for` loop or a `for...of` loop instead.

// simple example 
const codingLanguages = ['JavaScript', 'Python', 'Java', 'C++'];
codingLanguages.forEach((val) => {
    console.log(val); // Output: JavaScript, Python, Java, C++
});

// it is used to access the api data because it is more functional and easy to use
// Example of using `forEach` with an API response
const apiResponse = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];
apiResponse.forEach((user) => {
    console.log(`User ID: ${user.id}, Name: ${user.name}`);
})

// Output:
// User ID: 1, Name: Alice
// User ID: 2, Name: Bob
// User ID: 3, Name: Charlie
// Note: The `forEach` method is not chainable, meaning you cannot call another array method directly after it.
// If you need to transform the array, consider using `map` instead.

// example2

const myCoding=[
    { 
          id: 1, 
        language: 'JavaScript' 
    },
    { 
        id: 2, 
        language: 'Python'
     },
    { 
            id: 3,
         language: 'Java'
         }
]
myCoding.forEach((item) => {
    console.log(`ID: ${item.id}, Language: ${item.language}`);
})
// Output:
// ID: 1, Language: JavaScript
// ID: 2, Language: Python
// ID: 3, Language: Java

// Note: The `forEach` method is particularly useful for performing operations on each element of an array without needing to create a new array.

// by doing this all the data will be accessed 
// chahe vo array ho ya object ho