// Create a function to roll a dice & always display the value of the dice(1 to 6)
// Define the function
function rollDice(){
    let rand = Math.floor(Math.random() * 6)+1;
    console.log(rand);
}
// Call the function
rollDice();