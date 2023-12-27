/*
Prime Numbers: Write a loop to print all prime numbers between 1 and 50.
*/
function isPrime(num) {
    if (num <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  console.log("Prime numbers between 1 and 50:");
  
  for (let i = 2; i <= 50; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
  