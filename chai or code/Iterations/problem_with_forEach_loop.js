// forEach loop problem is when we returning any thing then it returns underfined 
// always return undefined 

// example
const coding =['js','java','cpp','ruby','python','go']

const value = coding.forEach((item)=>{
    return item
})
console.log(value) //undefined


// to resolve it thier is // two ways

// filter method takes also place

// example 
const coding1 =['js','java','cpp','ruby','python','go']
const value1 = coding1.filter((item)=>{
    return item
})
console.log(value1) //['js','java','cpp','ruby','python','go']
// map method takes also place
// example
const coding2 =['js','java','cpp','ruby','python','go']
const value2 = coding2.map((item)=>{
    return item
})
console.log(value2) //['js','java','cpp','ruby','python','go']
// reduce method takes also place
// example
const coding3 =['js','java','cpp','ruby','python','go']
const value3 = coding3.reduce((acc,item)=>{
    acc.push(item)
    return acc
},[])
console.log(value3) //['js','java','cpp','ruby','python','go']

// forEach loop is used to iterate over an array and perform an action on each element
// but it does not return a new array or value, it simply executes the provided function for each element
// so if you want to return a new array or value, you should use map, filter, or reduce methods
// or you can use a simple for loop to achieve the same result
// example of simple for loop
const coding4 = ['js', 'java', 'cpp', 'ruby', 'python', 'go'];
const value4 = [];
for (let i = 0; i < coding4.length; i++) {
    value4.push(coding4[i]);
}
console.log(value4); // ['js', 'java', 'cpp', 'ruby', 'python', 'go']
