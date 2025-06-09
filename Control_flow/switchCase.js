// switch case statement
function getDayName(day) {
    switch (day) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day";
    }
}
// Example usage
console.log(getDayName(0)); // Output: Sunday
console.log(getDayName(3)); // Output: Wednesday
console.log(getDayName(6)); // Output: Saturday


// using string cases
function getFruitColor(fruit) {
    switch (fruit.toLowerCase()) {
        case "apple":
            return "Red";
        case "banana":
            return "Yellow";
        case "grape":
            return "Purple";
        case "orange":
            return "Orange";
        default:
            return "Unknown fruit";
    }
}
// Example usage
console.log(getFruitColor("Apple")); // Output: Red 

console.log(getFruitColor("banana")); // Output: Yellow
console.log(getFruitColor("Grape")); // Output: Purple
console.log(getFruitColor("Orange")); // Output: Orange


// break satatement used to break the flow of giviing output once the coondition true it gives the output continiously when its not giving break keyword
function getNumberType(num) {
    switch (true) {
        case num > 0:
            return "Positive";
        case num < 0:
            return "Negative";
        case num === 0:
            return "Zero";
        default:
            return "Unknown";
    }
}

// Example usage 
           
console.log(getNumberType(5));   // Output: Positive
console.log(getNumberType(-3));  // Output: Negative
console.log(getNumberType(0));   // Output: Zero
console.log(getNumberType(10));  // Output: Positive