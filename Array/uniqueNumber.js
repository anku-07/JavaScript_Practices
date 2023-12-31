/*
Write a function that takes an array of numbers and returns a new array with only the unique numbers.
*/
function getUniqueNumbers(arr) {
    let uniqueNumbers = [];
    
    arr.forEach(function(number) {
      if (!uniqueNumbers.includes(number)) {
        uniqueNumbers.push(number);
      }
    });
  
    return uniqueNumbers;
  }
  
  // Test the function
  let numbers = [1, 2, 3, 4, 3, 2, 5, 6, 1, 7];
  console.log(getUniqueNumbers(numbers)); // Output: [1, 2, 3, 4, 5, 6, 7]
  