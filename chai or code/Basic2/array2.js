// when push method is used between two arrays it will add the element at the end of the array

const dc= ["batman", "superman", "flash", "wonderwoman"];
const marvel = ["ironman", "spiderman", "hulk", "thor"];

marvel.push(dc); // [ironman, spiderman, hulk, thor, [batman, superman, flash, wonderwoman]] 
// it treats the whole array as a single element and adds it at the end of the array

// instead of using push method we can use concat method to add the elements of one array to another array
// but concat method only add two arrays and it give the value in new variable 

const all_heroes = marvel.concat(dc); // [ironman, spiderman, hulk, thor, batman, superman, flash, wonderwoman]

// thier are one more method which is used widely which is which is spread operator
// spread operator (...)is used to add the elements of one array to another array it spreads the array into single elemts 
const all_heroes1 = [...marvel, ...dc]; // [ironman, spiderman, hulk, thor, batman, superman, flash, wonderwoman]

// if thier condition where we have array inside array inside array then to make it a single array we use ""flat""method it will remove all the nested array and make it a single array
// flat(depth of flatten the array ) use  infinity it is not optimized but use it 

const arr2 = [1, 2, [3, 4, [5, 6]]];
const arr3 = arr2.flat(2); // [1, 2, 3, 4, 5, 6]

console.log(Array.isArray("hero")); // false (it checks that it is array or not )
console.log(Array.isArray(arr3)); // true (it checks that it is array or not )

// to convert in array use Array.from

console.log(Array.from("hello")); // [h, e, l, l, o] (it converts string to array)


////////important for interview perspective

console.log(Array.from({name : "batman", age: 30})); //it gives empty array []  because thier is not specified that which one is converted into the array the keys or the values 

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1, score2, score3)); // [100, 200, 300] (it converts the values into array)