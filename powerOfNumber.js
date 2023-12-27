/*
Power Function: Create a function that calculates the power of a number without using the Math.pow() method.
*/
let base = parseInt(prompt("Enter a number : "));
let exponant = parseInt(prompt("Enter power : "));
let result = 1;

for(let i = 0; i < exponant; i++){
    result *= base;
}
console.log(`Number is ${base} and exponant is ${exponant} and result is ${result}`);