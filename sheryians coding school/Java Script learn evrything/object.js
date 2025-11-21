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

