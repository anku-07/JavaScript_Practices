/* 
Write a function that checks if a given year is a leap year.
*/
function isLeapYear(year) {
    // Leap years are divisible by 4
    // But not divisible by 100 unless also divisible by 400
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  
  // Test the function
  console.log(isLeapYear(2020)); // Output: true
  console.log(isLeapYear(2021)); // Output: false
  console.log(isLeapYear(2000)); // Output: true
  console.log(isLeapYear(1900)); // Output: false
  