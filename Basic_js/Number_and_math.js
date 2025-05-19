const number = 1000;
//by thiss method the number is specified any datatype you wANT 
const num = new Number(2000);

console.log(num);//[Number: 2000]
console.log(number)// 1000


// by this toString method you can convert any number to string
console.log(num.toString().length)//2000

// by this toFixed method you can convert any number to string with fixed decimal point
console.log(num.toFixed(2))//2000.00

// by this toExponential method you can convert any number to string with exponential notation
console.log(num.toExponential(2))//2.00e+3

// by this toPrecision method you can convert any number to string with specified precision
console.log(num.toPrecision(2))//2000
// by this toLocaleString method you can convert any number to string with specified locale
console.log(num.toLocaleString('en-US'))//2,000
// by this toLocaleString method you can convert any number to string with specified locale
console.log(num.toLocaleString('en-IN'))//2,000

//=================Maths=====================//

// by this method you can get the value of pi
console.log(Math.PI)//3.141592653589793
// by this method you can get the value of e
console.log(Math.E)//2.718281828459045
// by this method you can get the value of sqrt
console.log(Math.sqrt(16))//4
// by this method you can get the value of pow
console.log(Math.pow(2, 3))//8
// by this method you can get the value of random
console.log(Math.random())//0.123456789
// by this method you can get the value of round
console.log(Math.round(2.5))//3
// by this method you can get the value of ceil
console.log(Math.ceil(2.5))//3
// by this method you can get the value of floor
console.log(Math.floor(2.5))//2
// by this method you can get the value of abs
console.log(Math.abs(-2.5))//2.5
// by this method you can get the value of max
console.log(Math.max(2, 5, 10))//10
// by this method you can get the value of min
console.log(Math.min(2, 5, 10))//2


//important which is used in many projects

//random function
//most commonly used method
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(Math.random())//it give random no between 0 to 1
console.log(Math.random() * 10)//it give random no between 0 to 10
console.log(Math.floor(Math.random() * 10))//it give random no between 0 to 10
console.log(Math.floor(Math.random() * 10) + 1)//it give random no between 1 to 10
console.log(getRandomInt(1, 10))//it give random no between 1 to 10