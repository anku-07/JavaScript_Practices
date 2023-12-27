/*
Sum of Array Elements: Calculate the sum of all elements in an array without using the reduce() method.
*/
let number = [9,4,5,63,7,8,11];
let sum = 0;
for(let i = 0; i <= number.length-1; i++){
    sum += number[i];
}
console.log(`Sum of array eliment is ${sum}`);