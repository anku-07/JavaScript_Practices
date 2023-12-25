/*
Reversing Array Elements
Given an array letters = ['a', 'b', 'c', 'd', 'e'], reverse the order of its elements without using the reverse() method.
*/
let letters = ['a','b','c','d','e'];
// Using Reverse Function
// let reversedLetter = letters.reverse();
// console.log(reversedLetter);
// Without using reverse method
let start = 0
let end = letters.length - 1;
while(start < end){
    let temp = letters[start];
    letters[start]= letters[end];
    letters[end] = temp;

    start++;
    end--;
}
console.log(letters);
