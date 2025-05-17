//DataType 
//1.premitive Datatype 2. Non- Premitive (Reference)DataType 

// 1. premitive DataType (it makes the copy of the previous initialised and changes will heppend at the copied one)

// string 
const a = "abs"
console.log(typeof a) //string 
// number 
const b = 123
console.log(typeof b) //number
// null
let c = null
console.log(typeof c) //{ object }
// undefined 
var g;
console.log(typeof g) // undefined
// symbol 
const k = Symbol(12233)
console.log(typeof k)// symbol
// BigInt
const i = 249869861861n
console.log(typeof i)//bigint
// Boolean
const t = true
console.log(typeof t)//boolean

// 2. Non Premitive DataType (it takes refrences from memory and direct change the value thier)

// array , object , function

// array

const array = ['hello',32,"hello guys"]
console.log(array)
console.log(typeof array) //object

//object 

let Myobj = {
    name: "ram",
    class : 2,
}
console.log(Myobj)
console.log(typeof Myobj) // object

// function

let fun = function(){
    console.log("hello world") //function 

}
console.log(typeof fun)