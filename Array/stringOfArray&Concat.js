/*
Write a function that takes an array of strings and returns the strings concatenated together.
*/
function concatenateStrings(arr) {
    return arr.join('');
  }
  
  // Example usage:
  const strings = ['Hello', ' ', 'World', '!'];
  const concatenatedString = concatenateStrings(strings);
  console.log(concatenatedString); // Output will be 'Hello World!'
    