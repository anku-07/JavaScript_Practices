/*
Create a function that removes falsy values (false, null, 0, "", undefined, and NaN) from an array.
*/
function removeFalsyValues(arr) {
    return arr.filter(Boolean);
  }
  
  // Example usage:
  const values = [0, 1, false, true, "", "hello", null, undefined, NaN];
  const filteredValues = removeFalsyValues(values);
  console.log(filteredValues); // Output will be [1, true, "hello"]
  