/*
Write a function that takes in a number and returns "Fizz" if the number is divisible by 3, "Buzz" if divisible by 5, "FizzBuzz" if divisible by both, and the number itself if none of these conditions are met.
*/
 function isDivisiable(num){
    let msg;
    if(num % 3 == 0 && num % 5 == 0){
        return msg = "FizzBuzz";
    }else if(num % 5 == 0){
        return msg = "Buzz";
    }else if(num % 3 == 0){
        return msg = "Fizz";
    } else{
        return msg = "Met";
    }
}
let num = parseFloat(prompt("Enter a number : "));
console.log(isDivisiable(num));