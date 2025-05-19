let Mydate = new Date();
let Mydate1 = new Date(2023, 0, 1);
let Mydate2 = new Date(2023, 0, 1, 10, 10, 10);
console.log(Mydate);//2025-05-19T10:57:05.039Z
console.log(Mydate1);//2022-12-31T18:30:00.000Z
console.log(Mydate2);//2023-01-01T04:40:10.000Z

console.log(Mydate.toString());//Mon May 19 2025 16:27:05 GMT+0530 (India Standard Time)
console.log(Mydate.toDateString());//Mon May 19 2025
console.log(Mydate.toTimeString());//16:27:05 GMT+0530 (India Standard Time)
console.log(Mydate.toLocaleString());//19/5/2025, 4:27:05 pm
console.log(Mydate.toISOString());//2025-05-19T10:57:05.039Z
console.log(Mydate.toLocaleDateString());//19/5/2025
console.log(Mydate.toJSON());//2025-05-19T10:57:05.039Z
console.log(Mydate.toUTCString());//Mon, 19 May 2025 10:57:05 GMT
console.log(Mydate.getDate());//19
console.log(Mydate.getDay());//1
console.log(Mydate.getFullYear());//2025
console.log(Mydate.getMonth());//4 because indexing is start from 0
console.log(Mydate.getHours());//16
console.log(Mydate.getMinutes());//27
console.log(Mydate.getSeconds());//5

//to get the time directly use the getTime method
console.log(Mydate.getTime());//1684489025039
//to covert this milli second time we have to divide it by 1000
console.log(Math.floor(Mydate.getTime() / 1000));//1684489025

//to customize the date things use thee object and manually feed the data that what you want in that form 

console.log(Mydate.toLocaleDateString('en-IN', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'

}))