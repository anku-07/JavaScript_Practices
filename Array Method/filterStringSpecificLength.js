function filterStringsByLength(strings, targetLength) {
    // Use the filter method to return strings with the specified length
    const filteredStrings = strings.filter(str => str.length === targetLength);
  
    return filteredStrings;
  }
  
  // Example usage:
  const wordsArray = ["apple", "banana", "orange", "grape", "kiwi"];
  const targetLength = 5;
  
  const resultArray = filterStringsByLength(wordsArray, targetLength);
  console.log(resultArray);
  // Output should be ["apple", "grape"]
  