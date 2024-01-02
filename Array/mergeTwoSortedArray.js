/*
Create a function that merges two sorted arrays into one sorted array.
*/
function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0;
    let j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }
  
    // Add remaining elements from both arrays (if any)
    while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
    }
  
    while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
    }
  
    return mergedArray;
  }
  
  // Example usage:
  const sortedArray1 = [1, 3, 5, 7];
  const sortedArray2 = [2, 4, 6, 8];
  const mergedSortedArray = mergeSortedArrays(sortedArray1, sortedArray2);
  console.log(mergedSortedArray); // Output will be [1, 2, 3, 4, 5, 6, 7, 8]
  