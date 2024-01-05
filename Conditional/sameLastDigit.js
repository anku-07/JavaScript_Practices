// Write a program to check if 2 numbers have last digit.
let num1 = 22;
let num2 = 265782;
if((num1 % 10)==(num2 % 10)){
    console.log(`${num1} and ${num2} have same last digit.`);
}else{
    console.log(`${num1} and ${num2} have't same last digit.`);
}