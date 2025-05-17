console.log(2<=1) 
// false

console.log(2>=1)
// true
console.log(2==1) //false
console.log(2!=1)//true
console.log(2===1)//false

// comparison with different data types
console.log(2=="2") //true
console.log(2==="2") //false because === checks for both value and datatype its call the strict check

// comparison with boolean
console.log(2==true) //true
console.log(2===true) //false
console.log(2==false) //false
console.log(2===false) //false 

// comparison with null and undefined
console.log(null==undefined) //true
console.log(null===undefined) //false
console.log(null==0) //false
console.log(undefined==0) //false
console.log(null==false) //false
console.log(undefined==false) //false

console.log(null==null) //true
console.log(undefined==undefined) //true

console.log(null <= 0) //true
console.log(null >= 0) //true
console.log(undefined <= 0)//false
console.log(undefined >= 0)//false
console.log(null == 0)//false
console.log(undefined == 0)//false

console.log(NaN == 0) //false
console.log(NaN == NaN)//false
console.log(NaN == undefined)//false
console.log(NaN == null)//false
console.log(NaN == false)//false
console.log(NaN == true)//false
console.log(NaN >= 0)//false