/*
Write a JavaScript function that takes two numbers as parameters and returns their sum.
*/
function sum(num1,num2){
    return num1+num2;
}

let num1 = parseFloat(prompt("Enter first value : "));
let num2 = parseFloat(prompt("Enter second value : "));
alert(sum(num1,num2));