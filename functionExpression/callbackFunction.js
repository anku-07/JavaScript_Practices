//Create a higher-order function expression named operate that takes two numbers and a callback function as parameters. The callback function should perform a mathematical operation (e.g., add, subtract, multiply, divide) on the two numbers. Test the function with 5, 3, and a callback that multiplies the numbers. Log the result.

let operate = function(num1,num2,callback){
    return callback(num1,num2);
}
// callback function for multiplication
let multiply = function(a,b){
    return a *b;
}

const result = operate(5,3,multiply);
//Log the result
console.log(result);