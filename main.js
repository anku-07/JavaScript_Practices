// qn-1: Check if a number is even or odd:
/*
let num = 11;
if(num % 2 == 0){
    console.log(num + " is an even number");
}else{
    console.log(num + " is an odd number");
}
*/

//qn-2:  Check if a number is positive, negative, or zero:
/*
let num = -3;
if(num > 0){
    console.log(num + " is an positive number");
}else{
    console.log(num + " is an negetive number");
}
*/

//qn -3 : Check if a year is a leap year or not:
/*
let year = 2023;

if(((year % 4 == 0) && (year % 100 !== 0)) || (year % 400 == 0)){
    console.log(year + " is an lear year");
}else{
    console.log(year + " not an leap year");
}
*/

//qn -4 :Determine the largest among three numbers:
/*
let num1,num2,num3;
num1 = 40;
num2 = 50;
num3 = 30;
if(num1 > num2 && num1 > num3){
    console.log(num1 + " is greter");
}else if(num2 > num1 && num2 > num3){
    console.log(num2 + " is greter");
}else{
    console.log(num3 + " is greter");
}
*/

//qn-5: Check if a character is a vowel or a consonant:
/*
let char = 'z';
if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
    console.log(char + " is vowel");
}else{
    console.log(char + " is consonant");
}
*/

// qn-6 : Determine if a triangle is equilateral, isosceles, or scalene:
/*
let side1 = 5,side2 = 5,side3 = 5;
if(side1 === side2 && side2 === side3){
    console.log("triangle is equilateral");
}else if(side1 === side2 || side1 === side3 || side2 === side3){
    console.log("triangle is isosceles");
}else{
    console.log("triangle is scalene");
}
*/

// qn-7 : Check if a number is a prime number or not:
/*
let num = 6;
let isPrime = true;

for(let i = 2; i < num; i++){
    if(num % i === 0){
        isPrime = false;
        break;
    }
}

if(isPrime){
    console.log(num + " is prime number");
}else{
    console.log(num + " not an prime number");
}
*/
//qn-8: Check if a character is an uppercase letter or a lowercase letter:
/*
let char = 'A';
if(char >= 'A' && char <= 'Z'){
    console.log(char + " in Uppercase");
}else if(char >= 'a' && char <= 'z'){
    console.log(char + " in lowercase");
}else{
    console.log(char + " is a special character");
}
*/

// qn -9: Determine if a number is divisible by both 5 and 11:
/*
let num = 56;
if(num % 5 === 0 && num % 11 === 0){
    console.log(num + " is divided by 5 & 11");
}else{
    console.log(num + " not divided by 5 && 11");
}
*/

// qn -10: Check if a person is eligible to vote based on their age:
/*
let age = 21;

if(age >= 18){
    console.log("You are eligiable for vote");
}else{
    console.log("You are not eligiable for vote");
}
*/
