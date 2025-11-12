// loops
// for loop
// while
// do while
// for loop
 for(Start ; condition ; increment/decrement){
    // code
 }
    for(let i=1 ; i<=5 ; i++){
        console.log(i);
    }
// while loop
    Start;
    while(condition){
        // code
        // increment/decrement
    }
    let j =1;
    while(j<=5){
        console.log(j);
        j++;
    }

// do while
    Start;
    do{
        // code
        // increment/decrement
    }while(condition);

// example
    let k =1;
    do{
        console.log(k);
        k++;
    }
    while(k<=5);
// example 2
    for(let n=1 ; n<=10 ; n++){
        if(n%2==0){
            console.log(n);
        }
    }

// break
// at particular point the terminition of the loop
    for(let m=1 ; m<=10 ; m++){
        if(m==6){
            break;
        }
        console.log(m);
    }

// continue
// to skip specific iteration
    for(let p=1 ; p<=10 ; p++){
        if(p==6){
            continue;
        }
        console.log(p);
    }


// practice Questions

// 1. Print numbers from 1 to 10 using for loop
for(let i=1;i<11;i++){
    console.log(i);
}
// 2. Print number from 10 to 1 using while loop
let x=10;
while(x>=1){
    console.log(x);
    x--;
}

// 3. print even number from 1 to 20 using a for loop 

for(let i=1;i<21;i++){
    if(1%2===0){
        console.log(i);
    }
}

// 4. print odd number from 1 to 15 using while loop 

let y=1;
while(y<16){
    if(y%2===1){
        console.log(y);
       
    }
    y++;
}

// 5. print the multiplicaation table of 5 (5*1=5)
for(let i=1;i<11;i++){
    console.log(`5 X ${i} = ${5*i}`)
}

// 6. calculate the sum of 1 to 100 numbers using for loop

let sum=0;
for(let i=1;i<101;1++){
sum=sum+i;
}
console.log(sum);

// 7. print all the number which are divisible by 3 between 1 to 50

for(let i=1; i<51 ; i++){
    if(i%3===0){
        console.log(i);
    }
}

// 8. ask the  user for a number and print wheather each number from q1 to that number is even or odd

let val = prompt("enter the number:");
for  (let i=1;i<=val;i++){
    if(i%2===0){
        console.log(`${i} is even`);
    }
    else{
        console.log(`${i} is odd`);
    }
}

// 9. count how many number between 1 to 100 are divisible by both 3 and 5.
let count=0;
for (let i=1;i<101;i++){
    if (i%3===0 && i%5===0){
        // count=count+i;
        count++;
    }
    
}
console.log(count);



// breaks and continue ke kuchh Questions

// 1. stop at first multiple of 7
// write a loop from 1 to 100 that:
// . points each numbers 
// . stops completely when it finds the first number divisible by 7.

for(let i=1;i<101;i++){
    console.log(i);
    if(i%7 === 0){
        break;
    }
}
// 2. skip multiples of 3
// write a loop from 1 to 20 that:
// . skip number divisible by 3
// .print all other numbers

for(let i=1;i<21;i++){
    if(i%3 === 0){
        continue;
    }
    console.log(i);
}

// 3. print first 5 odd numbers only 
//  . write a loop from 1 to 100 that 
//  . prints only 5 odd numbers 
//  . then stop the loop 
let counter=0;
for(let i =1; i<101;i++){
    
    if(i%2===1){
        console.log(i);
        counter++;
    }
    if(counter===5){
        break;
    }
}
// baki chatgpt ka use karke or achhe se question practice karo 
