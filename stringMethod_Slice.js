/*
Qn-1:
Given a string text, create a function that extracts a substring between the start and end indices, mimicking the behavior of text.slice(start, end) without using the slice method.
*/
let text = 'This is a sample text.';
const start = 5;
const end = 16;
console.log(text.slice(start,end));


/*
Qn-2:
Implement a function that replicates the behavior of String.prototype.slice() using string manipulation and without using the built-in method.
*/
const str = 'JavaScript is awesome';
console.log(str.slice(14,22));


/*
Qn-3:
Write a function that extracts a substring from a string similar to slice, but allows negative indices to represent positions from the end of the string.
*/
const string = "Learnig JavaScript";
console.log(string.slice(-10,-1))


/*
Qn-4:
Create a function that extracts a portion of a string from the start index to the end of the string, without using the slice method.
*/
const strings = "Hello World!";
console.log(strings.substring(6));


/*
Qn-5:
Develop a function that simulates the behavior of text.slice(start, end) with an added argument for a step value to return characters at regular intervals.
*/
const msg = "This is the sample of slice method.";
console.log(msg.slice(0,18));