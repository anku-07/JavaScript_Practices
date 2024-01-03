/*
Create a function that counts the occurrences of a specific element in an array.
*/
function countOccurrences(arr, element) {
    let count = 0;
    
    // Loop through the array and increment count for each occurrence of the element
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
        count++;
      }
    }
    
    return count;
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 2, 2, 5, 2];
  const countTwos = countOccurrences(numbers, 2);
  console.log(`The number 2 occurs ${countTwos} times.`);
  