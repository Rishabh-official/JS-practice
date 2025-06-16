// map method 
// in map method unique things are only entered no other things are entered 
// means it not prints redundent values 

// also it works as forEach method 

const myNums = [1,2,3,4,5,6,7,8,9,10];

const newNums = myNums.map( (num)=> num+1)
console.log(newNums);

// concepts of chaining
// myNums.map().map().map().filter().reduce()
// like this chaining will done thier are multiple times it heppens 

const hello = myNums.map ( ( num)=> num + 1 )
                    .map ( (num)=> num*2)
                    .filter((num)=> num>20)


console.log(hello)