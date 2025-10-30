/*
number => 2 to power range 
bigInt => bigger than 2 to the 53 it used
string => "   " this type it used
bolean => true/false
null => null (standalone value)
undefined =. no value assigned in this 
symbol => unique value
*/

console.log(typeof 10) // number
console.log(typeof 10n) // bigint
console.log(typeof "10") // string
console.log(typeof true) // boolean
console.log(typeof null) // object
console.log(typeof undefined) // undefined
console.log(typeof Symbol()) // symbol
console.log(typeof BigInt(10)) // bigint
console.log(typeof NaN) // number
console.log(typeof Infinity) // number
console.log(typeof 0) // number
console.log(typeof -0) // number
console.log(typeof 1.5) // number
console.log(typeof "hello") // string
console.log(typeof "10") // string
console.log(typeof "10.5") // string
console.log(typeof "10" + 5) // string
console.log(typeof "10" - 5) // NAN
console.log(typeof "10" * 5) // NAN
console.log(typeof "10" / 5) // NAN
console.log(typeof "10" % 5) // NAN
// console.log(typeof "10" ** 5) // number
console.log(typeof "10" + 5) // string
console.log(typeof "10" - 5) // NAN

