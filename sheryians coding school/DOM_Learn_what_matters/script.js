// DOM Learn What Matters

// 1. what is DOM ?
// Document Object model 
// frontend ki javaScript 

// 2. 4 pillars of DOM 

// (1) Selection of an Element 

var a = document.querySelector('h1');

// (2) changing HTML

a.innerHTML = "helllo";
a.textContent = "<i>hellllllloooooooo</i>"; // ye as it dikha dega
a.innerHTML = "<i>hellllloooooo</i>"; // tag ki functionality ko use karta hai

// (3) chnaging CSS

a.style.color = "red";
a.style.backgroundColor = "black";

// 3. Event Listener
// event :- kuchh harkat hona website 
// Listener : - observe karna & React karna 

a.addEventListener("click",function(){
    console.log("hello");
})

// Bulb & Light on

var bulb = document.querySelector('#bulb');
var btn = document.querySelector('button');

var flag = 0 ;

btn.addEventListener("click",function(){
    if(flag == 0){
        bulb.style.backgroundColor = "yellow"
        flag =1;
    }
    else{
        bulb.style.backgroundColor = "transparent";
        flag = 0;
    }
})

// selecting multiple element at a single time 

var b = document.querySelector('h1');

// ye sirf jo pahle aayega usi ko select karega baki ko nahi karega 

// uske liye 

var b = document.querySelectorAll('h2')

// isse sab select ho jayega but ye ek list node dega [h2 ,h2, h2]


// list node : - array type hota hai 

// print karne ke liye forEach loop lagate hai 

b.forEach(function(e){
    console.log(e);
})

// Selected by id and Class

// getElementById() - id select karne ke liye 
// getElementByClassName() - class select karne ke liye 

// textcontant

// specially text change hota hai bus isse 
// means agar koi tags ke sath change karte hai to vo change nahi karta hai usko direct print kar dea hai 

// but innerHTML tags ko unki functuonality ki tarah treat karta hai

a.textContent = "<i>hellllllloooooooo</i>"; // ye as it dikha dega
a.innerHTML = "<i>hellllloooooo</i>"; // tag ki functionality ko use karta hai
