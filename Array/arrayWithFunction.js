/*
Create an array of fruits ["apple", "banana", "orange", "grape", "watermelon"] and write a function to add a new fruit at the end of the array.
*/
let fruits = ["apple", "banana", "orange", "grape", "watermelon"];

function addFruit(fruit) {
  fruits.push(fruit);
}

// Adding a new fruit
addFruit("pineapple");

// Displaying the updated array of fruits
console.log(fruits);
