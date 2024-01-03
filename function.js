/*
a. Write a function square that takes a number as input and returns its square.
b. Create a function greet that takes a name as an argument and returns a greeting message.
*/

// Qn-A:

function square(){
    let square = prompt("Enter value of a square : ");
    return square*square;
}
console.log(square());

// Qn-B:

function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Aditya"));