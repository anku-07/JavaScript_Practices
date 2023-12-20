// Uppercase Method
/*
Qn-1:
Basic Conversion:
How does the toUpperCase method in JavaScript work? Provide an example demonstrating its usage on a string.
*/
let str = "aditya";
console.log(str.toUpperCase());


/*
Qn-2:
Handling Special Characters:
Explain how the toUpperCase method treats special characters like accented letters or non-alphabetic characters.
*/
let specialStr = "123#@";
console.log(specialStr.toUpperCase());


/*
Qn-3:
Can you chain the toUpperCase method with other string methods in JavaScript? Show an example demonstrating this chaining.
*/
const sentence = 'hello, this is a test string!';

const modifiedSentence = sentence
  .toUpperCase() // Convert the entire string to uppercase
  .replace('TEST', 'sample') // Replace 'TEST' with 'sample'
  .slice(0, 15) // Extract the first 15 characters
  .concat('...'); // Append '...' to the resulting string

console.log(modifiedSentence);


/*
Qn-4:
Describe the immutability aspect of the toUpperCase method. How does it affect the original string?
*/
let str ="Sting is a immutable.";
let newStr = str.toUpperCase();
console.log(`Before added uppercase ${str}`);
console.log(`After added uppercase ${newStr}`);


/*
Qn-5:
Is the behavior of toUpperCase affected by the locale or language settings of a system? Explain with an example or scenario where this might be relevant.
*/
const turkishString = 'iıİI';
console.log(turkishString.toUpperCase());


// Lower case.
/*
Qn-6:
Functionality Overview:
Describe the purpose and functionality of the toLowerCase method in JavaScript. Provide an example showcasing its usage.
*/
let str = "ADITYA";
console.log(str.toLowerCase());


/*
Qn-7:
Case-Insensitive Comparisons:
How can the toLowerCase method be useful in case-insensitive string comparisons? Provide an example illustrating this.
*/
const str1 = "Hello";
const str2 = "hello";

const normalizedString1 = str1.toLowerCase();
const normalizedString2 = str2.toLowerCase();

if(normalizedString1 === normalizedString2){
    console.log('The strings are equal (case-insensitive comparison).');
}else{
    console.log('The string are not equal.');
}


/*
Qn-8:
Explain how the toLowerCase method treats non-alphabetic characters or symbols within a string.
*/
let str = "!#123";
console.log(str.toLowerCase());


/*
Qn-9:
Combining with Regular Expressions:
Can the toLowerCase method be combined with regular expressions? If yes, give an example demonstrating this usage.
*/
const sentence = 'This is an Example Sentence with Different Cases';

// Using a regular expression to match words starting with 's' or 'S'.
const modifiedSentence = sentence.replace(/\b[Ss]\w*/g, (match) => {
  // Applying toLowerCase to the matched words
  return match.toLowerCase();
});
console.log(modifiedSentence);

