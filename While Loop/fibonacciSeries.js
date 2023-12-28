// Generate the fibonacci series upto a certain limit using a while loop.
let fib = prompt("Enter a number : ");
let num1 = 0,num2 = 1, next;
let i = 1;
while(i <= fib){
    console.log(num1);
    next = num1 + num2;
    num1 = num2;
    num2 = next;
    i++;
}