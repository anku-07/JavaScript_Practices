/*
Qn-1:
Write a function that takes in a person's age as an argument and returns a message based on the following conditions:

If age is less than 18, return "You are a minor."
If age is between 18 and 65 (inclusive), return "You are an adult."
If age is greater than 65, return "You are a senior citizen."
*/
let age = prompt("Enter Your age : ");
age = parseInt(age);

if(age < 18){
    console.log(`Your is ${age} so you are a minor.`);
}else if(age >= 18 && age <= 65){
    console.log(`Your age is ${age} so you are an adult.`);
}else if(age >= 66 && age <= 100){
    console.log(`Your age is ${age} so you are a senior citizen.`);
}else{
    console.log(`Please enter valid age.`);
}


/*
Qn-2:
Create a function that advises what to wear based on the temperature input. The function should follow these conditions:
*/
If the temperature is less than 10 degrees Celsius, recommend wearing a heavy coat.
If the temperature is between 10 and 20 degrees Celsius, recommend wearing a light jacket.
If the temperature is above 20 degrees Celsius, recommend wearing a t-shirt.

let tem =prompt("Enter temperature in celsius.");
tem = parseInt(tem);

if(tem < 10){
    console.log(`${tem} celsius Wearing a heavy coat.`);
}else if(tem >= 10 && tem <= 20){
    console.log(`${tem} celsius Wearing a light jacket.`);
}else if(tem >= 21){
    console.log(`${tem} celsius Wearing a t-shirt.`);
}else{
    console.log(`Enter valid temperature.`);
}


/*
Qn-3:
Write a function that takes in two numbers and returns a message indicating which number is larger or if they are equal.
*/
let num1 = prompt("Enter 1st number :");
num1 = parseInt(num1);
let num2 = prompt("Enter 2nd number : ");
num2 = parseInt(num2);

if(num1 > num2){
    console.log(`${num1} and ${num2} learger between this two number is ${num1}.`);
}else if(num2 > num1){
    console.log(`${num1} and ${num2} learger between this two number is ${num2}.`);
}else if (num1 === num2 ){
    console.log(`${num1} and ${num2} both number are equal .`);
}else{
    console.log(`Enter only number`);
}


/*
Qn-4:
Create a function that takes in a username and password as arguments and checks if the username is "user123" and the password is "password123". Return true if both match, otherwise return false.
*/
let user = prompt("Enter your user id : ");
let pass = prompt("Enter your password : ");

const id = "adi123";
const password = "password123";

if((user == id) && (pass == password)){
    console.log(`You enter your id is ${user} and password ${pass} is True.`);
}else{
    console.log(`You enter your id is ${user} and password ${pass} is False.`);
}


/*
Qn-5:
Develop a function that checks if a person is eligible for a discount on a movie ticket based on age. The function should return true if the person is either under 12 years old or over 60, and false otherwise.
*/
let age = prompt("Enter your age : ");
age = parseInt(age);

if(age < 12){
    console.log(`Youe age is ${age} so are eligible for a discount on a movie ticket.`);
}else if(age >= 12 && age <= 100){
    console.log(`Youe age is ${age} so are not eligible for a discount on a movie ticket.`);
}else{
    console.log(`Please enter valid age.`);
}


/*
Qn-6:
Create a function that takes in a numerical grade and returns a letter grade based on the following grading scale:

90 or above: "A"
80-89: "B"
70-79: "C"
60-69: "D"
Below 60: "F"
*/
let marks = prompt("Enter Your marks here and check your grade : ");

if(marks >= 90 && marks <= 100){
    console.log(`Youe marks is ${marks} and your grade is 'A'`);
}else if(marks >= 80 && marks <= 89){
    console.log(`Youe marks is ${marks} and your grade is 'B'`);
}else if(marks >= 70 && marks <= 79){
    console.log(`Youe marks is ${marks} and your grade is 'C'`);
}else if(marks >= 60 && marks <= 69){
    console.log(`Youe marks is ${marks} and your grade is 'D'`);
}else if(marks <=59){
    console.log(`Youe marks is ${marks} and you Fail`);
}else{
    console.log(`Please enter valid number`);
}


/*
Qn-7:
Write a function that checks whether a given number is even or odd. Return true if the number is even and false if it's odd.
*/
let num = prompt("Enter an number : ");
num = parseInt(num);
if(num%2 == 0){
    console.log(`${num} is a even number.`);
}else if(num%2 != 0){
    console.log(`${num} is a odd number.`)
}else{
    console.log("Please enter a valid number.");
}


/*
Qn-8:
Create a function that takes in a single character and determines if it's a vowel (a, e, i, o, u). Return true if it's a vowel, otherwise return false.
*/
let vowel = prompt("Enter an alphabet and check is it a vowel or consonant : ");

if(vowel == 'a' || vowel == 'e' || vowel == 'i' || vowel == 'o' ||vowel == 'u' || vowel == 'A' || vowel == 'E' || vowel == 'I' || vowel == 'O' ||vowel == 'U'){
    console.log(`${vowel} is vowel.`);
}else{
    console.log(`${vowel} is consonant.`);
}


/*
Qn-9:
Write a function that takes in a number and returns a message indicating whether the number is positive, negative, or zero.
*/
let number = prompt("Enter an number for check is it positive number or negative number or Zero: ");
number = parseInt(number);
if(number == 0){
    console.log(`Number is ${number}`);
}else if(number > 0){
    console.log(`${number} is a positive number.`);
}else if(number < 0){
    console.log(`${number} is a negetive number.`);
}else{
    console.log(`${number} is not a number.`);
}


/*
Qn-10:
Develop a function that takes in three angles and checks if they form a valid triangle. Return true if the angles form a valid triangle (the sum of angles equals 180 degrees), otherwise return false.
*/
let angle1 = prompt("Enter angle 1st :");
let angle2 = prompt("Enter angle 2nd : ");
let angle3 = prompt("Enter angle 3rd : ");
angle1 = parseInt(angle1);
angle2 = parseInt(angle2);
angle3 = parseInt(angle3);
let sumAngle = angle1 + angle2 + angle3;
const totalAng = 180;

if( sumAngle === totalAng ){
    console.log("True.");
}else{
    console.log("Flase.");
}
