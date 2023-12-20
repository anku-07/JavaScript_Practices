// IndexOf
/*
Qn-1:
Basic IndexOf Usage:
Given a string sentence, use the indexOf() method to find the index of the first occurrence of the word "fox". Log the index to the console.
*/
let str = "Fox is a dengerous animal";
console.log(str.indexOf("Fox"));


/*
Qn-2:
Using indexOf(), check if the word "jumped" exists in the string "The quick brown fox". Log true if present and false if absent.
*/
let sentence = "The quick brown fox";
let wordToFind = "jumped";

let isPresent = sentence.indexOf(wordToFind) !== -1;
console.log(isPresent);


/*
Qn-3:
Given a string phrase, use indexOf() to find the index of the last occurrence of the word "the". Log this index to the console.
*/
const word = "I Love coding.";
const wordToFind = "Love";
let isPresent = word.indexOf(wordToFind);
console.log(isPresent);


/*
Qn-4:
Utilize indexOf() to find the index of the word "lazy" within the string "The Lazy dog jumps over the LAZY fox", ensuring it's case-sensitive. Log the index to the console.
*/
let sentence = "The lazy dog jumps over the LAZY fox";
console.log(sentence.indexOf("lazy"));


/*
Qn-5:
Using indexOf() on the string "She sells seashells by the seashore", find the index of the first occurrence of "seashells" starting the search from index 10. Log the index to the console.
*/
const sentence  = "She sells seashells by the seashore."
console.log(sentence.indexOf("seashells"));


