/*
Qn : Finding Maximum Value
From the array numbers = [14, 52, 78, 21, 36], find the maximum value without using the Math.max() method.
*/

let numbers = [14,52,78,21,36];

let max = numbers[0];
for(let i = 1; i < numbers.length; i++){
    if(numbers[i] > max){
        max = numbers[i];
    }
}
console.log(`The maximun value is ${max}`);