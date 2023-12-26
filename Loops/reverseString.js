/*
Reverse String: Iterate through a string and print it in reverse order without using the reverse() method.
*/
let str = prompt("Enter an string : ");
let reversedString = '';
for(let i = str.length - 1; i >= 0 ; i--){
    reversedString += str[i];
}
console.log(reversedString);