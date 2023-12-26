/*
Generate the first 10 numbers in the Fibonacci sequence (where each number is the sum of the two preceding ones) using a loop.
*/
let n = 10;
let fibonacci = [0, 1];

for (let i = 2; i < n; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log("The first 10 numbers in the Fibonacci sequence are:");
console.log(fibonacci.slice(0, n));
