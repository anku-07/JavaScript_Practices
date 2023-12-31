/*
Create an array of numbers and write a function that returns the sum of all the numbers in the array.
*/
let numbers = [5, 10, 15, 20, 25];

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Calculate the sum of numbers array
console.log(sumArray(numbers)); // Output: 75
