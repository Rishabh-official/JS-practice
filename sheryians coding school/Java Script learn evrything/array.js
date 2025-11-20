// array 

// multiple values ko hold karne ke liye arrays ka use hota hai 
// -->indexing 0 se start hoti hai ,value access karne ke liye indexing ki use hoti hai 
// --> existing index pe koi value na hone par undefined milta hai 

// how to create a array

let a = [];
// or
let a1 = new Array();

// acessing values

// by index number of array the values from arrays are accessed 

// modification 
// by selecting  perticular index and put the values on it by this value got modified 

// METHODS IN ARRAY :-

    // .NAME() --> aisa kahi par dikh jaye to use method kahte hai 

// 1. push() --> kisi array me last index me value push karne ke kam aata hai ye \\

// example 

        let arr = [1,2,3,4,5,6,7];
        arr.push(8);
        console.log(arr);
        // output --> [1,2,3,4,5,6,7,8] 8 is added

// 2. pop() --> ye array me last index se values hatane ke liye use hota hai 

// /example 

        arr.pop();
        console.log(arr);
        // output --> [1,2,3,4,5,6,7] 8 was removed 

// 3. shift() --> ye starting index se values hatane ke liye use hotaa hai 

        arr.shift();
        console.log(arr);
        // output --> [2,3,4,5,6,7] 1 was removed 

// 4. unshift()--> starting index me value feed karne ke liye use hota hai ye 

        arr.unshift(1);
        console.log(arr);
        // output --> [1,2,3,4,5,6,7] 1 was added 
        arr.unshift(0);
        console.log(arr);
        // output --> [0,1,2,3,4,5,6,7] 0 were also addedd at the begining 

// 5. splice() --> bich se value hatane ke liye use hota hai 

// syntax:--
// splice(kis jagah se value hatani hai , or kitni value hatani hai)

        arr.splice(2,1); //at the sencond index ek value hata do
        console.log(arr);
        // output --> [0,1,3,4,5,6,7] (2 is removed)

// 6. slice() --> ye bhi use hota hai bich se values hatane ke liye ]
            //   --> ye naya array deta hai original array me changes nahi karta hai ye 
            //  --> splice same array me changes karta hai 
            // synatax
            // slice(kaha se ,kaha tak+1)

            arr.slice(2,5);
            console.log(arr);
            // --> output [1,2,6,7] (3,4,5) hat gaya hai 

// 7. reverse()--> ye reverse kar detaa hai values ko means reverse index me put kar deta hai values 

            arr.reverse();
            console.log(arr);
            // -->output [7,6,2,1]

// 8. sort()--> ye sorting ke liye use hota hai jaise values ko increasing or decreassign order me rakhne ke liye use hota hai 
            // --> nuemaric value ko sort karne ke liye ye ek funcrion accept karta hai or alphaneumaric values like characters ke liye ye koi function pass karne ki jarurat nahi padti hai 
           
            //  alphanumeric values ko sort karna 
            let alpha = [aam ,jam,ramm ,shyan,kuku ,bubu,khikhi];
            alpha.sort();
            console.log(alpha);
            // output -->[aam,bubu,khikhi,kuku,jam,ramm,shyan]

            // neumeric values ko sort karna ye function pass karke hi hoga 
            let neumeric = [11,62,3,4,25];
            neumaric.sort(function(a,b){
                return a-b; 
            });
            console.log(neumeric);
            // --. output [3,4,11,25,62] accesnding order me sort karta hai 
            neumaric.sort(function(a,b){
                return b-a; 
            });
            console.log(neumeric);
            // --. output [62,25,11,4,3] decending order me sort karat hai 


// loops or kuchh array centeric functions 

// forEach():--> har ek ke liye function chalata hai array me 
          
           neumeric.forEach(function(val){
            console.log(val);
           })
           // o/p :- 62,25,11,4,3

           
// .map() :-- map function 
        //   --> map sift tab use karna hai jab aapko ek naaya array banana hai pichhle array ke data ke basis pe 
        //  --> map dikhte hi sath  man me ej balnk array bana lena hai 
        //  --> function jo return karega utna hi naye array me feed hota hai
        //  --> array ka size purane array jitna hi hoga 

        // --> kuchh return na karne par "undefined" return hota hai new array me 

        // --> let neumeric = [11,62,3,4,25]

        let y = neumeric.map(function(val){
            return 12;
        }); //[12,12,12,12,12]

        let x = neumaric.map(function(val){});
        // [undefined,undefined,undefined,undefined,undefined,]

        let z = neumaric.map(function(val){
            return val>10;
        });
        //[11,62,undefined,undefined,25]
        // ye tabhi use karna hai jab ek naya array Banana ho purane array ke basis pe

        // jab bhi apko aisa koi case dikh jaage jaha par ek array se naya array banega and wo naya array kuchh vaalues ko rakhegaa tab map lagega .

        

 // filter()

        // --> return true /false karte hai 
        // --> jo true hoga vo naye Array me jayega or baki skip ho jayega 44
    
        let arr1 = [1,2,3,4,5,6,7];
        let newarr = arr1.filter(function(val){
            return val>4;
        });
        console.log(newarr);
        //[5,6,7]


//Reduce()

        // -->kisi array ko singlr value me reduce karna ho to ye use hota hai 
        // --> Accumulator:-- ye vo banda hai jo bar bar chalne par apni value ko yad rakhta hai return karne ke bad bhi 

        let red = arr1.reduce(function(Accumulator,val){
            return Accumulator+val;
        },0);
        console.log(red);
        // output--> 28

// find()

        // --> ye function accept karta hai 
        // --> ye koi condition ko satisfy karne par pahli value ko hi return kar deta hai 
        // --> like  agar val=1 khoj rahe hai to jab pahle 1 mil jayega to vo retuern kardega turant bhale bad me or bhi 1 prweent hota hia 

        let arr2= [1,2,3,4,56,4,211,1,1,];
        let f = arr2.find(function(val){
            return val===1;
        });
        console.log(f);
        // 1
        // ye khoj kar single value return karta hai 

// some()
        // --> array me koi bhi aisi value hai jisko condition satify ho to true falsse deta hai

        let any = arr2.some(function (val){return val>199});
        console.log(any); // true
    
// every()
        // --> sabhi elements ka vo consition follow karna jaruri haii 
        let e = arr2.every((val)=> {return val>1;});
        console.log(e);
        // false



// Destructuring :- array se value nikalana hai destructuing hai 
// bina indexing ke use ke 
let d = [1,2,4,4,5,4];
// let [a,b,,c]=d; / sahi hai ye console me work kar rha hai yaha kyo issue kar raha hai nahi ptahai 


// spread operator :-

            // copy karne ke liye use hota hai spread operator 
            let g= [...d];
            console.log(g);
            // [1,2,4,4,5,4]


// practice Questions 

// 1. create an array with 3 fruits and print the second fruit.
let fruits = ["banana","apple","orange"];
fruit[1];

// 2. add "Mango"at the end and "pipeapple" at the begining of this array

fruits.push("Mango");
fruits.unshift("pineapple");

// 3. Replace "banana" with "kiwi" in the array above.

fruits[0]= kiwi;

// 4. whats the diffrence between .push() and .unshift().

//  push array ke last me add karta hai or unshift array ke starting me add karta hai value

// 5.Removw the last item from this array using a method

fruits.pop()

// 6.Insert "red" and "blue" at index 1 in this array

let colors = ["green" , "yellow"];
colors.splice(1,0,"red","blue");
// ["green","red","blue","yellow"]

// 7 . extract only the middle 3 elements from this array

let arr3 =[1,2,3,44,5,,56,6,8];
let s = arr3.slice(3,6);
// [1,2,3,6,8]

// 8. sort this array aiphabetically and then reverse it 

let name =["aalu","bhaalu","beta","sonu"];
name.sort().reverse();

// 9. use .map() to square each number 

let m=[1,2,3,4];
let ma = m.map((val)=> val*val);
console.log(ma);

//  10. use .filter() to keep numbers greater then 10.

let greater = arr3.filter((val)=>val>10);

//  11. use .reduce() to find the sum of this any :

let redu = [10,20,30];
let ans = redu.reduce((acc,val)=>{return acc + val},0);
console.log(ans);

// 12. Use .find() to get the first number less then 10

let fi = arr3.find((val)=>{return val<10;});
console.log(fi);

// 13. Use .some() to check if any student has scored below 

let student = [45,23,56,64,90];
let re = student.some((val)=>{ return val<33;
})
console.log(re);

// 14.use every() to check if all numbers are even 

let even = [2,4,6,8,10];
let check = even.every((val)=>val%2===0);
console.log(check);

// 15. Destructure this array to get first name and last name 
let fullName = ["rishabh","banchhor"];
let [firstName,lastName] = fullName;
firstName;
lastName;

// 16 . Merge two arrays using spread operator

let v =[3,4];
let w = [1,2];
let o = [...w,...v];
console.log(o);

// 17. add "India" to the start of this array using spread

let countries = ["USA","UK"];
countries = ["india",...countries];
console.log(countries);


// 18 . clone this array property (not by reference)
let arr4 =[...arr];



// common confusion 

// 1. splice v/s slice
// splice = main array pe changes perform hote hai 
// slice = ek naya array deta hai

// 2. map v/s forEach

// forEach :- kuchh return nahi karta hai har val pe jata hai and perform karta 
        //    :- New array Nahi deta same array me perform hote hai 
    
// Map :- ye  Ek naya array deta hai 
//      :- return karta  hai
//     :- jab bhi purane array se kuchh banana ho tab iska use karte hai 

// 3. Big Blunder with .sort()

// [10,20,30].sort()--->["10","20","30"]

// yha pe string me convert kar deta hai neumeric values ko sort karne ke liye function pass karte hai 
