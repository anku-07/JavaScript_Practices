/*
Create a function that performs a deep comparison between two objects.
*/
function deepEqual(obj1, obj2) {
    // Check if both parameters are objects and not null
    if (typeof obj1 === 'object' && obj1 !== null &&
        typeof obj2 === 'object' && obj2 !== null) {
      
      // Get the keys of both objects
      const keys1 = Object.keys(obj1);
      const keys2 = Object.keys(obj2);
  
      // Check if the number of keys is the same
      if (keys1.length !== keys2.length) {
        return false;
      }
  
      // Check if all keys in obj1 are present in obj2 and values are equal
      for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
          return false;
        }
      }
  
      // If all checks pass, objects are deeply equal
      return true;
    }
  
    // If not objects, perform simple equality check
    return obj1 === obj2;
  }
  
  // Example usage:
  const objA = { a: 1, b: { c: 3 } };
  const objB = { a: 1, b: { c: 3 } };
  const objC = { a: 1, b: { c: 4 } };
  
  console.log(deepEqual(objA, objB)); // Output will be true
  console.log(deepEqual(objA, objC)); // Output will be false
  