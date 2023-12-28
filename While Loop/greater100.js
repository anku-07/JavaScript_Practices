// Ask the user to input a number greater than 100 using a while loop keep asking until they enter a valid number.
let num = parseInt(prompt("Enter a number who's greater than 100 : "));
while((num  <= 100 || isNaN(num))){
    num = prompt("You enter invalid number,please try again!");
}
console.log(`You enter right input Congrats!!`);