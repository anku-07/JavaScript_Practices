/*
Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
*/
// Define the lengths of the three sides of a triangle
let side1 = 5; 
let side2 = 6; 
let side3 = 7; 

// Calculate the semi-perimeter of the triangle
let s = (side1 + side2 + side3) / 2;

// Use Heron's formula to calculate the area of the triangle
let area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));

// Log the calculated area to the console
console.log(area);
