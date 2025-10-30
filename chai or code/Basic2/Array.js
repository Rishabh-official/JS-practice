// Declaration
// type 1

const arr = [1, 2, 3, 4, 5];

// type 2

const arr1 = new Array(1, 2, 3, 4, 5);

// type 3
const arr2 = new Array(5); // empty array with length 5

// type 4
const arr3 = Array.of(1, 2, 3, 4, 5); // array with length 5

// type 5
const arr4 = Array.from("hello"); // array with length 5

// SHALLOW COPY :-- it takes refrence from the original array and changes into that copied array affects the original array 

// DEEP COPY :-- it creates a new array and changes into that copied array does not affect the original array.

// methods in array 

// 1. push() :-- add element at the end of the array
const arr5 = [1, 2, 3, 4, 5];
 arr5.push(6); // [1, 2, 3, 4, 5, 6]
console.log(arr5); // [1, 2, 3, 4, 5, 6]
// 2. pop() :-- remove element from the end of the array
arr5.pop(); // [1, 2, 3, 4, 5]

console.log(arr5); // [1, 2, 3, 4, 5]
// 3. unshift() :-- add element at the beginning of the array
const arr6 = [1, 2, 3, 4, 5];
arr6.unshift(0); // [0, 1, 2, 3, 4, 5]
console.log(arr6); // [0, 1, 2, 3, 4, 5]
// 4. shift() :-- remove element from the beginning of the array
arr6.shift(); // [1, 2, 3, 4, 5]
console.log(arr6); // [1, 2, 3, 4, 5]
// 5. splice() :-- add or remove element from the array
const arr7 = [1, 2, 3, 4, 5];
arr7.splice(2, 0, 6); // [1, 2, 6, 3, 4, 5]
console.log(arr7); // [1, 2, 6, 3, 4, 5]
arr7.splice(2, 1); // [1, 2, 3, 4, 5]
console.log(arr7); // [1, 2, 3, 4, 5]
// 6. slice() :-- return a shallow copy of a portion of an array into a new array object
const arr8 = [1, 2, 3, 4, 5];
const arr9 = arr8.slice(2, 4); // [3, 4]
console.log(arr9); // [3, 4]
console.log(arr8); // [1, 2, 3, 4, 5]


//    splice [start, deleteCount, item1, item2, ...] :-- start from index 2 and delete 3 elements and add 6
const arr10 = [1, 2, 3, 4, 5];
arr10.splice(2, 3, 6); // [1, 2, 6, 3, 4, 5]
console.log(arr10); // [1, 2, 6]