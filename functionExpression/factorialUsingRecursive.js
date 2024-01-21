//Implement a recursive function expression named factorial that calculates the factorial of a given number. Test the function with the number 5 and log the result.

const fact = function(n){
    //Base case : factorial of 0 and 1 is 1
    if(n == 0 || n == 1){
        return 1;
    }else{
        return n * fact(n-1);
    }
};

const result = fact(5);
console.log(result)