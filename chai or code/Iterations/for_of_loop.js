// for off loop 
// in for loop hamko initialization and updation karne ki jaurat nahi hoti hai vo automatically update karti ye sab chije 

// syntax
// for(const itrator of Object){
        // what should be done with each element
// }

// example
const array = [1, 2, 3, 4, 5];
for (const number of array) {
    console.log(number); // Output: 1 2 3 4 5
}

// Example of a for...of loop that iterates over an array and prints each element   
// The `for...of` loop is used to iterate over iterable objects like arrays, strings, and other collections.
// Here's a breakdown of the `for...of` loop syntax:

// string
const str = "Hello";
for (const char of str) {
    console.log(char); // Output: H e l l o
}
// interations in map 

// map:- map is datatype in which the  unique data will store this is same as like object but it stores the value in perticular order 

// initialization of map
const map = new Map();
map.set('IND',"india");
map.set('USA',"United states of America");
map.set('UK',"United Kingdom");
map.set('FR',"France");
map.set('IND',"india");

console.log(map); // Output: Map(4) { 'IND' => 'india', 'USA' => 'United states of America', 'UK' => 'United Kingdom', 'FR' => 'France' }

// in for of loop we can iterate the map also

for (const key of map) {
    console.log(`${key}`); // Output: [IND: india], ;[USA: United states of America], [UK: United Kingdom, FR: France
}
for (const [key, value] of map) {
    console.log(`${key}: ${value}`); // Output: IND: india, USA: United states of America, UK: United Kingdom, FR: France
}
// this method saperatly gives the key and value of the map


// *************************** when we use for of loop with object ***************************
// For...of loops cannot be used directly with plain objects because they are not iterable.
// However, you can use `Object.keys()`, `Object.values()`, or `Object.entries()` to iterate over objects.

const obj = { a: 1, b: 2, c: 3 };

// Using Object.keys() to iterate over keys

// for (const key of obj) {
//     //console.log(obj); // 
// // Output: TypeError: obj is not iterable
// }