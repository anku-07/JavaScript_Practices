/*
Count Vowels: Count the number of vowels (a, e, i, o, u) in a given string using a loop.
*/
let inputString = prompt("Enter a string : ");
let vowelCount = 0;

inputString = inputString.toLowerCase();

for(let i = 0; i <= inputString.length -1; i++){
    let currentChar = inputString[i];
    if(currentChar === 'a' || currentChar === 'e' || currentChar === 'i' || currentChar === 'o' || currentChar === 'u'){
        vowelCount++;
    }
}
console.log(`The number of vowel in this string ${inputString} is ${vowelCount}`);