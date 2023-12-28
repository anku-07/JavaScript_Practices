// Compute the factorial of a given number using a while loop.
let num = prompt("Enter a number : ");
let fact = 1;
let i = 1;
while(i <= num){
    fact *= i;
    i++;
}
console.log(num + " factorial is " + fact);