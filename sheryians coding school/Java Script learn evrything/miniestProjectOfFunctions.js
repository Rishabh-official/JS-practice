// BMI Calculator

let bmi =function(weight,height){
    return weight/(height*height);
}
bmi(100,1.5).toFixed(2);
// 44.4


// create  a reuseable discount calculator (HOF)

function discountCalculator(discount){
    return function(price){
        return price - price*(discount/100);

    };
}
let ten = discountCalculator(10);
let twenty = discountCalculator(20);
console.log(ten(1000));
console.log(twenty(1000));



// build a counter using Clouser 
