/* Qn -1
Write a javascript program to get the first n element of an array (n can be any positive number);
for example : for array[7,9,0,-2] and n = 3;
print [7,9,0];
*/
let num = [7,9,0,-2];
let n = 3;
let ans = num.slice(0,n);
console.log(ans);

/* Qn -2
Write a javascript program to get the last n element of an array (n can be any positive number);
for example : for array[7,9,0,-2] and n = 3;
print [9,0,-2];
*/
let msg = [7,9,0,-2];
let n = 3;
let ans = msg.slice(msg.length-n);
console.log(ans);

/* Qn -3
Write a javascript program to check whether a string is blank or not.
*/
let str = prompt("Enter a string :");
if(str.length == 0){
    console.log("String is blank.");
}else{
    console.log("String is not blank.");
}

/* Qn -4
Write a program in js to test whether the at the given (character) index is lowerCase.
*/
let msg = "apNacoLLeGe";
let idx = prompt("Enter a number : ");
if(str[idx] == str[idx].toLowerCase()){
    console.log("Character is lowercase.");
}else{
    console.log("Character is not lowercase.");
}

/* Qn -5
Write a program in js program to strip leading and traling spaces from a string.
*/
let str = prompt("Please enter a string");
console.log(`Orginal string is = ${str}.`);
console.log(`String without spaces = ${str.trim()}`);

/* Qn -6
Write a program in js to check if an element exist in an array or not.
*/
let arr = ["Adi" , "Piku" , 22,21,26.5];
let item = "piku";
if(arr.indexOf(item) != -1){
    console.log("Eliment exist.");
}else{
    console.log("Eliment is not exist");
}
