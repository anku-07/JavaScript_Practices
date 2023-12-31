/*
Write a function that takes a number as an argument and returns "Even" if the number is even and "Odd" if it's odd.
*/
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  
  // Test the function
  console.log(checkEvenOrOdd(5)); // Output: "Odd"
  console.log(checkEvenOrOdd(10)); // Output: "Even"
  