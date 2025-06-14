// for in loop
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}
// Output:
// name: John
// age: 30
// city: New York
// Note: The for...in loop iterates over the enumerable properties of an object.
// It is important to note that the order of properties is not guaranteed.
// Use with caution, as it can iterate over inherited properties as well.
// To avoid inherited properties, you can use Object.hasOwnProperty():
for (const key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(`${key}: ${person[key]}`);
    }
}
// Output:
// name: John
// age: 30
// city: New York
// Note: The for...in loop is not recommended for arrays, as it can lead to unexpected results.
// Use a for loop or forEach instead for arrays.
// Example with an array (not recommended):
const arr = [1, 2, 3];
for (const index in arr) {
    console.log(`${index}: ${arr[index]}`);
}
// Output:
// 0: 1
// 1: 2
// 2: 3
// Note: The for...in loop iterates over the indices of the array, not the values.


// this is used to iterate the object 
// array also iterated but not recommaded beacuse for array for each loop is more functionable 

// note
// fot....in loop is not applicable in maps 
// because map is not iterable 
// Example with a Map (not applicable):
const myMap = new Map([
    ['name', 'John'],
    ['age', 30],
    ['city', 'New York']
]);

for (const key in myMap) {
    console.log(`${key}: ${myMap[key]}`);
}
// Output:
// This will not work as expected, because Map is not iterable with for...in.
