// in reduce method we can also use chaining
// reduce method is used to reduce an array to a single value by applying a function to each element
// and accumulating the result
// example of reduce method
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue; // adding each element to the accumulator
}, 0); // initial value of accumulator is 0
console.log(sum); // Output: 15
// example of reduce method with objects
const books = [
    { title: 'JavaScript Basics', author: 'John Doe', year: 2020 },
    { title: 'Advanced JavaScript', author: 'Jane Smith', year: 2021 },
    { title: 'Python for Beginners', author: 'Alice Johnson', year: 2019 },
    { title: 'Java Programming', author: 'Bob Brown', year: 2022 }
];
const totalYears = books.reduce((accumulator, book) => {
    return accumulator + book.year; // adding the year of each book to the accumulator
}, 0); // initial value of accumulator is 0
console.log(totalYears); // Output: 8061
// example of reduce method to count occurrences of elements
const fruits = ['apple', 'banana', 'orange', 'apple', 'banana', 'apple'];
const fruitCount = fruits.reduce((accumulator, fruit) => {
    accumulator[fruit] = (accumulator[fruit] || 0) + 1; // counting occurrences of each fruit
    return accumulator;
}, {}); // initial value of accumulator is an empty object
console.log(fruitCount); // Output: { apple: 3, banana: 2, orange: 1 }
// example of reduce method to flatten an array

const nestedArray = [[1, 2], [3, 4], [5]];
const flattenedArray = nestedArray.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue); // concatenating each sub-array to the accumulator
}, []); // initial value of accumulator is an empty array
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5]
// example of reduce method with arrow functions and implicit return
const totalYearsArrow = books.reduce((acc, book) => acc + book.year, 0);
console.log(totalYearsArrow); // Output: 8061
// example of reduce method with chaining
const totalYearsChained = books
    .filter(book => book.year > 2019) // filter books published after 2019
    .reduce((acc, book) => acc + book.year, 0); // reduce to sum the years
console.log(totalYearsChained); // Output: 6061
// example of reduce method to group objects by a property
const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'David', age: 30 }
];
const groupedByAge = people.reduce((accumulator, person) => {
    const age = person.age;
    if (!accumulator[age]) {
        accumulator[age] = []; // initialize an empty array for this age
    }
    accumulator[age].push(person); // add the person to the array for their age
    return accumulator;
}, {}); // initial value of accumulator is an empty object
console.log(groupedByAge);
// Output:
// {
//   '25': [ { name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 } ],
//   '30': [ { name: 'Bob', age: 30 }, { name: 'David', age: 30 } ]
// }
