// Create a function that returns the sum of numbers from 1 to n.
function getSum(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i;
    }

    return sum;
}

console.log(getSum(10));
