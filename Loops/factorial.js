/*
Factorial: Calculate the factorial of a number (e.g., 5! = 5 x 4 x 3 x 2 x 1) using a loop.
*/
let number = parseInt(prompt("Enter a number : "));
let fact = 1;
for(let i = 1; i <= number ; i++){
    fact *= i;
}
console.log(fact);