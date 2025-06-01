// declaration of the object has two type 
// 1. object literal
// 2. object constructor(singleton)

// object literal

const obj = {}

// object constructor
const obj1 = new Object() // it is not used widely
// Object.create()


// in object the key are customized because thier are name of key are anything
// in array there the accessing the value only by the index number which are fixed but not in object we can costomized it.

// object literal

// no singleton
const obj2 = {
    name: "batman",
    age: 30,
    isHero: true,
    address: {
        city: "gotham",
        state: "newyork"
    },
    // method
    getName: function () {
        return this.name;
    }
}
// accessing the value also 2 types 1.) dot notation 2.) bracket notation
// 1.)dot notation
console.log(obj2.name); // batman
console.log(obj2.age); // 30

// 2.) bracket notation 

// why this more useful because it defines the datatype and the special type of declaration can be easily handled 

console.log(obj2["name"]); // batman



// example it is also a interview Questions 
// Q.) create an symbol and and use as a key in the object and print it and also declare "full name" as a keey and print it 

const sym = Symbol("uniqueKey");
const obj3 = {
    // this note specify the sym is symbol it just treats it as a string key
    sym: "batman", // this is not using symbol as a key, it is just a property with the name "sym"
    // using symbol as a key
    [sym]: "batman",
    "full name": "Bruce Wayne"
};
console.log(obj3[sym]); // batman
console.log(obj3["full name"]); // Bruce Wayne
console.log(obj3.sym); // batman (this is not using symbol as a key, it is just a property with the name "sym")
// console.log(obj3.full name) this throws the error 


// overrite  the value 
obj2.name = "superman"; // it will change the value of name key in object

// value lock by this nobody change the things 

Object.freeze(obj2); // it will lock the object and no one can change the value of the object

// adding function in object 
obj2.getAge = function () {
    console.log(`My age is ${this.age}`);// by string interpolation the age is  accessed from object thier the this method is used to access the recent object (usi object ke value ko access karne ke liye)
};

//------------concept of object of object =----------------------

// in this object of object concept overriting of value done the values overrides the value 

const a ={
    name:"boy"
}
const b ={

    name :"ramprakash"
}
const c ={
    name:"hero boy"
}
a[b]={
    name:"hero"
}
a[c]={
    name:"hero ladka"
}
console.log(a[b]);
console.log(a[b])


// here the overite has done
