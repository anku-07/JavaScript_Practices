// Write a script that prompts the user to enter a password.Continue prompting untill the correct password "E.G : 12345" is enterd.
let pass = prompt("For Sing Up : Enter a strong password : ");
let logPass = prompt("For Log In : Enter your password : ");
while(pass !== logPass){
    logPass = prompt("Your password was wrong ,please try again.");
}
console.log("Welcome you are login:");