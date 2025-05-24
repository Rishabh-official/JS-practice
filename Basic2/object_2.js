//multiple nesting is done in object 

const obj4 = {
    name: "batman",
    age: 30,
    isHero: true,
    address: {
        city: "gotham",
        state: "newyork",
        postalCode: {
            code: 12345,
            area: "downtown"
        }
    },
    getName: function () {
        return this.name;
    }
};
// accessing the nested object
console.log(obj4.address.postalCode.code); // 12345

// merging the objects 

const obj5 = { 1:'a', 2:'b', 3:'c' };
const obj6 = { 4:'d', 5:'e', 6:'f' };

const obj7 = {onj5,obj6}//this will output same as array it give object inside the object 

// to merge objects, we can use several methods in JavaScript:\

// using Object.assign() to merge objects
// Object.assign(target, ...sources) merges the properties of source objects into the target object
const mergedObj = Object.assign({}, obj5, obj6);
console.log(mergedObj); // {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f'}

// using spread operator to merge objects (mostly used)
const mergedObj1 = {...obj5, ...obj6};
console.log(mergedObj1); // {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f'}

// using Object.entries() and Object.fromEntries() to merge objects
const entries = Object.entries(obj5).concat(Object.entries(obj6));
const mergedObj2 = Object.fromEntries(entries);
console.log(mergedObj2); // {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f'}
// using lodash library to merge objects
// const _ = require('lodash');
// const mergedObj3 = _.merge({}, obj5, obj6);
// console.log(mergedObj3); // {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f'}
// using JSON methods to merge objects
const mergedObj4 = JSON.parse(JSON.stringify(obj5) + JSON.stringify(obj6));
console.log(mergedObj4); // {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f'}


// object.key gives an array of all the keys
// object.values gives an array of all the values
console.log(Object.keys(obj4)); // ['name', 'age', 'isHero', 'address', 'getName']
console.log(Object.values(obj4)); // ['batman', 30, true, {city: 'gotham', state: 'newyork', postalCode: {code: 12345, area: 'downtown'}}, ƒ]
// object.entries gives an array of all the key-value pairs
console.log(Object.entries(obj4)); // [['name', 'batman'], ['age', 30], ['isHero', true], ['address', {city: 'gotham', state: 'newyork', postalCode: {code: 12345, area: 'downtown'}}], ['getName', ƒ]]

//------------------------------------------------------------------------------

//                            Object Destructuring and JSON API

// ✅ Q1: Basic Destructuring
// person object me se name aur age nikaalo

const person = {
    name: "Arjun",
    umar: 22,
    city: "Pune"
  };
  
  // Your code here 👇
  
  const { name, umar } = person;
    console.log(name, age); // Arjun 22

  
  // ✅ Q2: Rename while destructuring
  // user object me se username ko nikaalo aur uska naam "userName" rakho
  
  const user = {
    id: 101,
    username: "king123"
  };
  
  // Your code here 👇
  
  const {username:userName} = user;
    console.log(userName); // king123

  
  // ✅ Q3: Default Value use karo
  // Agar object me age na ho, to default 18 rakho
  
  const profile = {
    name: "Neha"
  };
  
  // Your code here 👇
  
  const { age = 18 } = profile;
    console.log(age); // 18 (default value used since age is not present in the object)
  
  // ✅ Q4: Nested Destructuring
  // student ke marks object me se math aur science nikaalo
  
  const student = {
    name: "Ravi",
    marks: {
      math: 95,
      science: 88
    }
  };
  
  // Your code here 👇
  
  const {marks: { math, science }} = student;
    console.log(math, science); // 95 88
  
  // ✅ Q5: Rest operator ka use
  // employee object me se name nikaalo, baaki sab ek object me store karo
  
  const employee = {
    nam: "Pooja",
    age: 29,
    department: "HR"
  };
  
  // Your code here 👇
  
  const {nam , ...rest } = employee;
    console.log(nam); // Pooja
    console.log(rest); // { age: 29, department: 'HR' }
  
  // ✅ Q6: Function parameter me destructuring
  // greet function banao jo object le aur name ko print kare
  
  // Your code here 👇
  function greet({name}) {
    console.log("Hello", name);
  }
  
  greet({ name: "Rohan", age: 20 });
  
  function showCity({city}) {
    console.log("City is", city);
  }
  
  showCity({ name: "Amit", city: "Kanpur" });
  // Output: City is Kanpur

  