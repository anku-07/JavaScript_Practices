/*
Write a function that finds the second smallest number in an array of integers.
*/
function secondSmallestNumber(arr) {
    if (arr.length < 2) {
      return "Array should have at least two numbers";
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        secondSmallest = smallest;
        smallest = arr[i];
      } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
        secondSmallest = arr[i];
      }
    }
  
    if (secondSmallest === Infinity) {
      return "There is no second smallest element";
    }
  
    return secondSmallest;
  }
  
  // Example usage:
  const numbers = [5, 2, 9, 1, 5, 6];
  const secondSmallest = secondSmallestNumber(numbers);
  console.log(secondSmallest); // Output will be 2
  