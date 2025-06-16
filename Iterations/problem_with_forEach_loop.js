// forEach loop problem is when we returning any thing then it returns underfined 
// always return undefined 

// example
const coding =['js','java','cpp','ruby','python','go']

const value = coding.forEach((item)=>{
    return item
})
console.log(value) //undefined
