/*
Write a function that capitalizes the first letter of each word in a sentence.
*/
function capitalizeWords(sentence) {
    return sentence.replace(/\b\w/g, char => char.toUpperCase());
  }
  
  // Example usage:
  const sentence = "this is a sample sentence";
  const capitalizedSentence = capitalizeWords(sentence);
  console.log(capitalizedSentence); // Output will be "This Is A Sample Sentence"
  