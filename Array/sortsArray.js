/*
Create a function that sorts an array of numbers in ascending order.
*/
function sortNumbersAscending(arr) {
    return arr.slice().sort((a, b) => a - b);
  }
  
  // Example usage:
  const numbers = [5, 2, 9, 1, 5, 6];
  const sortedNumbers = sortNumbersAscending(numbers);
  console.log(sortedNumbers); // Output will be [1, 2, 5, 5, 6, 9]
  