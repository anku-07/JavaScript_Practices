function sum(a,b =2){
    return a+b;
}
console.log(sum(1)); // 1 pass as argument in variabel a and b default value 2 output will be -> 3;
console.log(sum(3,5)); // output will be -> 8 here is passing two argument.

// Invalid in javaScript
function add(a = 2,b){
    return a + b;
}
console.log(add(3)); //Output is NaN bcz 3 pass in variable a and b has no value .

