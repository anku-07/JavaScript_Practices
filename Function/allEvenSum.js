/*
Write a function that takes in an array of numbers and returns the sum of all the even numbers in the array.
*/
function isEvenSum(){
    let number = [10,11,12,13,14,16];
    let sum = 0;
    for(let i = 0; i <= number.length-1; i++){
        if(number[i]%2 == 0){
            sum+=number[i];
        }
    }
    console.log(sum);
}
let print = isEvenSum();
console.log(print);