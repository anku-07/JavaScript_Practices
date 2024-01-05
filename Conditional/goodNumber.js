// Create a number variable num with the some value now,print "good" if the number is divisiable by 10 and print "bad" if it is not.

let number = parseInt(prompt("Enter a number : "));
if(number%10 == 0){
    console.log("It is a good number.")
}else{
    console.log("It is a bad number.");
}