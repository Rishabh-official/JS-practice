//  OBJECT 

// when any perticular chij ki sabhi details chahiye hoti hai tab use hota hai OBJECT   

let obj = {};
let obj1 = {

    name : "harsh",
    age : 26,
};

// how to access  values from Object 

// dot notaion (.)
obj1.name;
// bracket notation ([])
obj1['name'];

// kyo do tarike hai apne pass 

// basically jo bracket wala method hai uske use se jo jo string type ki keys hoti hsi (example ke liye first-name ) is type ke strings or numbers jaise key hote hai usko kabhi kabhi dot notaion se access karne pe error milta hai 


// . (dot notaion) :-- dot ke through access karte hai to vo actual me vo key or value keo khojta hia kasie bhi karke  (ye sirf khojega na ki convert karega)

// [] (bracket notation) :-- agar value nahi milta hai to vo convert karta hai us value ko object ke roop me 

// nesting & deep access

const user  ={
    name:"harsh",
    address:{
        city:"bhopal",
        pin: 490032,
        location : {
            lat:25.21,
            lng:55.12,
        },
    },
};
user.address.location.lat;


// Destructuring :--

let{lat,lng}=user.name.location; //pahle access karte ke liye is type likhna padta hai lekin destructuring ke through
console.log(lat);
console.log(lng);
// lat&lng abhi variable ban gya hai ab uski value direct access kar pa rahe hai hum 

// loops
// for in loop 

// syntax:--\\
//  for(variable in ObjectName){}; 

for(let key in obj1){
    console.log(key);
}
// isse sirf keys access hogi  naki value 
// value access karne  ke liye dot wala method use nahi hoga yaha pe bracket wala method use hoga 

for(let key in obj1){
    console.log(obj[key]);
}

// some methods of objects 

// Object.keys(objectName)

Object.keys(obj1);
// ['name','age','email']
// object ke keys ka ek array banana ho to ye use hota hai 


Object.entries(user);
// ye array me array banake deta hai 
// means har ek key value pair ke liye Array banata hai 
// or usko ek array me dal deta hai 

// ex
// [
// [array1],
// [array2],
// [array3]
// ]

// output
// [Array(2), Array(2)]
// 0 : 
// (2) ['name', 'harsh']
// 1 :
// (2) ['age', 26]
// length :2

// Copy the Object 

// their are two type of copying method

// Spread operator 
//  in spread operator the copy of object will be done but thier will be little issue with this when we have the nested object the spread operaetor copyies main key and values but it not copy the nested value it takes refrence from that 

let obj2 = [...obj1]; // copy successfully
let obj3 = [...user]; // inside location all the values are taken a reference from the user obj


// Object.assign() 
// is method se bhi copy ho jajta 
// lekin ye jyada usee nhi hota hai 

// Object.assign(is object me pahle se kuchh rakh sakte hai ,jisko copy karna hai)
// by this the concatination of the objects done
let obj4=Object.assign({},obj1);

// Deep Cloning 
// by this method the nested object are copied.

// JSON.stringify(object): ye string me convert karta hai
// JSON.parse(string) : ye object me convert kar deta means uske actual form me convert kar deta hai 

// cloneing
// JSON.parse(JSON.stringify(object))

let obj5=JSON.parse(JSON.stringify(user));
// deep copy ho gya hai 

// optional chaining
// errors se bachne ke liye use hota hai 
// vo chij present hai ki nahi agar present ho to thik or na ho to vo error nahi dega 

obj5.address?.city;

// computed property

// kisi object me variable ki value add karne ke liye property use hota hai 

let role = "admin";
obj1={
    [role] : "Harsh"
};
console.log(obj1);


// Questions 

// Q 1. create an object for a student with name ,age ,and  is enrolled 

let student = {
    name :"Ram",
    age : 20,
    isEnrolled : true,
};

// Q 2. can an object key be a number or boolean ? try this 
//  yes 
const t = {
    true : "yes",
    42 : "ans",
};
console.log(t);

// Q 3. Access the value of "first-name" from this Object

const user1 = {
    "first-name"  : "harsh",
};
// user1.first-name ---- XXXX

user["first-name"]; //accessed

// Q 4. Given a dynamic key let key = "age", how will you access user[key]
 
let key = "age";
let obj6={
    key : 24,
};
obj[key];

// Q 5. From the object below , print the latitude

const locations = {
    city : "bhopal",
    coordinates : {
        lat : 23.5,
        log : 76.3,
    },
};
locations.coordinates.lat;

// Q 6. what will happen if coordinates is missing ? how can you prevent errors?
// by optional chaining 

locations?.coordinate?.lat; //yaha pe error throgh hota kyoki ye jo "coordinates" karke hai key name or yaha pe "coordinate" bas use kiye hai so ye error degaa 

// Q 7. Destructur the city and lat from the locaation object above

let {city} = locations;
let {l} =locations.coordinates;

// Q 8. Destructure the key "firstName" as a variable called firstName

const user3 = {
    "first-Name" : "harsh",
};

let{"first-Name": firstName} = user4;

// Q 9. Use for inloop to log all keyss in the object 
const course = {
    title : "javaScript",
    duration : "4 hours"
};
 
for(key in course){
    console.log(key);
};

// Q 10. Use Object.entries() to print all key values pairs as 

Object.entries(course).forEach(function(val){console.log(val[0] + ":" + val[1])});

// title : javaScript
// Duration : 4 Hours

// Q 11. Spread Operator se copy karo 

const original = {
    a : 1,
    b : 3,
};
const copy = {...original};

// Q 12. problem kya hai is code me 

const obj7 ={
      info:{score : 80}
};
const clone = {...obj7};
clone.info.score =100 ;
console.log(obj7.info.score); // value of scorre is updated to 100 because here refrence of the key is take thier will be ecxact copy held

// Q 13 . deep cloning karo 

let clone1 = JSON.parse(JSON.stringify(obj7));

// Q 14. Rewrite this safielt using optional chaining 

const person ={};
// console.log(person.profile.name); // error dega
console.log(person?.profile?.name);

// Q 15. Use a varible  to dynamically assign a property

const key1 = "role";
const key2 ={name : "harsh",
[key] : "admin",};

// common confusion 

// deep cloning & Shallow copy 
// deep cloneing  :--  by this method the nested objects are totally cloned 
// shallow copy me nested copies rah jati hai vo copy naho ho pati hai 
