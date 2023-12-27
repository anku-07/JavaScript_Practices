/*
Palindrome Checker: Create a function that checks if a given string is a palindrome (reads the same forwards and backwards) without using reverse.
*/
let str = prompt("Enter an string : ");
let newStr = str;
let reversedString = '';
for(let i = str.length -1; i >= 0; i--){
    reversedString += str[i];
}
if(reversedString === newStr){
    console.log("Palindrome");
}else{
    console.log("Not Palindrome");
}