// Declare your name as a string and print its length.
let name = "Aditya";
console.log(name.length);
// print first character
console.log(name[0]);
// print last character
console.log(name[5]);


//What is the output following code.
// code is "apnaCollege" + 123;
console.log("apnaCollege" + 123); // output is apnaCollege123;

//What are lengths of an empty string and a string with a single space?

//without space
let empty = ""; // output: length is  0
// With space
let emtStr = " " // output : length is 1

// Compare value , not type

"123" == 123; // output : true
"5" == 5; // output : true
0 == ''; // output : true
0 == false; // output : true
null == undefined; // output : true

//Compare value and type

"123" === 123; // output : false
"5" === 5; // output : false
0 === ''; // output : false
0 === false; // output : false
null === undefined; // output : false