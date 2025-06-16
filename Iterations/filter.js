// filter method is used for filtering elements from an array based on a condition  
// and it returns a new array with the elements that satisfy the condition
// example of filter method
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((number) => {
    return number % 2 === 0; // condition to filter even numbers
});
console.log(evenNumbers); // [2, 4, 6, 8, 10]
// example of filter method with objects
const books = [
    { title: 'JavaScript Basics', author: 'John Doe', year: 2020 },
    { title: 'Advanced JavaScript', author: 'Jane Smith', year: 2021 },
    { title: 'Python for Beginners', author: 'Alice Johnson', year: 2019 },
    { title: 'Java Programming', author: 'Bob Brown', year: 2022 }
]
const recentBooks = books.filter((book) => {
    return book.year > 2020; // condition to filter books published after 2020
});
console.log(recentBooks);
// Output:
// [
//   { title: 'Advanced JavaScript', author: 'Jane Smith', year: 2021 },
//   { title: 'Java Programming', author: 'Bob Brown', year: 2022 }
// ]
// filter method can also be used to filter based on multiple conditions
const filteredBooks = books.filter((book) => {
    return book.year > 2019 && book.author.includes('John'); // condition to filter books published after 2019 and authored by 'John'
});
console.log(filteredBooks);
// Output:
// [
//   { title: 'JavaScript Basics', author: 'John Doe', year: 2020 },
//   { title: 'Python for Beginners', author: 'Alice Johnson', year: 2019 }
// ]
// filter method can also be used with arrow functions and implicit return
const filteredBooksArrow = books.filter(book => book.year > 2020 && book.author.includes('Jane'));
console.log(filteredBooksArrow);
// Output:
// [
//   { title: 'Advanced JavaScript', author: 'Jane Smith', year: 2021 }
// ]
// filter method can also be used with chaining
const filteredAndMappedBooks = books
    .filter(book => book.year > 2019) // filter books published after 2019
    .map(book => book.title); // map to get only the titles
console.log(filteredAndMappedBooks);
// Output:
// [
//   'JavaScript Basics',
//   'Advanced JavaScript',
//   'Python for Beginners',
//   'Java Programming'
// ]

