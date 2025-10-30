// Nullish Coalescing Operator (??)

// The nullish coalescing operator (??) returns the right-hand operand when the left-hand operand is null or undefined, otherwise it returns the left-hand operand.

// basically null coalesing operator ko use is liye karte hai jab hum log api ya backend se data fetch  karte hai to kabhi fetch hota hai or kabhi nahi hota hai to is case me program ko efficient rakhen ke liye jo best rahta hai us value ko de deta hai operator 
// example ke liye jab api se data nahi aaya to uske jagah null de sakte hai or program me null koo handle karne ke liye pahle se case or situatiions banake rakhenge taki easily handle ho jaye situaltions 
// of jab value mil jati hai to us value ko use kar lete hai na null //important thing agar jabb bhi 2 se 3 value aati hai to jo pahle aaata haai uske return kar deta hai ye 
let value1 = null;
let value2 = "default value";
let result = value1 ?? value2;
console.log(result); // Output: "default value"
// If the left-hand operand is not null or undefined, it returns the left-hand operand.
let value3 = "some value";
result = value3 ?? value2;
console.log(result); // Output: "some value"
// The nullish coalescing operator can be useful for providing default values in function parameters.
function getValue(input) {
    return input ?? "default value";
}
console.log(getValue(null)); // Output: "default value"
console.log(getValue(undefined)); // Output: "default value"
console.log(getValue("input value")); // Output: "input value"
// It can also be used in conjunction with other operators, such as logical OR (||).
let value4 = 0;
let value5 = "fallback value";
result = value4 ?? value5;
console.log(result); // Output: 0
// In this case, since 0 is not null or undefined, it returns 0 instead of the fallback value.
// The nullish coalescing operator is particularly useful when dealing with optional chaining or when you want to ensure that a variable has a defined value.

// It can help avoid unintended behavior when using logical OR (||) with falsy values like 0, false, or an empty string.

// Example with optional chaining
let obj = {
    prop: null
};
let value6 = obj.prop ?? "default prop value";
console.log(value6); // Output: "default prop value"

// Example with optional chaining and function calls
function getConfig() {
    return null;
}
let config = getConfig() ?? { default: "config" };
console.log(config); // Output: { default: "config" }