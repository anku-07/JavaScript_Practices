// Implement a function to check if a string contains only digits.

function containOnlyDigit(str){
    return str.split('').every(char => !isNaN(char));
}
// Example used
let str1 = "12345";
let str2 = "d1245";

console.log(containOnlyDigit(str1));
console.log(containOnlyDigit(str2));