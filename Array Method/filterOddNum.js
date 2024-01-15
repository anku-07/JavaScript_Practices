//Using the forEach method, write a JavaScript function called filterOddNumbers that takes an array of numbers as input and returns a new array containing only the odd numbers. Avoid using the filter method; instead, implement the filtering logic within the forEach callback.

function filterOddNumber(numbers){
    const oddNumbers = [];
    numbers.forEach(function(number){
        if(number%2 !== 0){
            oddNumbers.push(number);
        }
    });
    return oddNumbers;
}

const inputArray = [1,2,3,4,5,6,7,8,9];
const result = filterOddNumber(inputArray);
console.log(result);


