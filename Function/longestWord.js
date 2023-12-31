/*
Create a function that takes a sentence as a parameter and returns the longest word in it.
*/
function findLongestWord(sentence) {
    // Split the sentence into an array of words
    let words = sentence.split(" ");
    
    // Initialize variables to store the longest word and its length
    let longestWord = "";
    let maxLength = 0;
  
    // Iterate through each word to find the longest one
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
        longestWord = words[i];
      }
    }
  
    return longestWord;
  }
  
  // Test the function
  let sentence = "The quick brown fox jumped over the lazy dog";
  console.log(findLongestWord(sentence)); // Output: "jumped"
  