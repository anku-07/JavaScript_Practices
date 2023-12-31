/*
Create a function that checks whether a given word is a palindrome or not.
*/
function isPalindrome(str){
    let orgStr = str;
    let reversed = '';
    for(let i = str.length - 1; i >= 0 ; i --){
         reversed += str[i];
    }
    if(orgStr == reversed){
        console.log("Palindrome");
    }else{
        console.log("Not palindrome");
    }
}

let checkPalindrome = prompt("Enter a string : ");
console.log(isPalindrome(checkPalindrome));