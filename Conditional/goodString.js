// a "Good string" that starts with the letter 'a' and has length > 3 write a program to find if s string is good or not.
let str = "aditya";
if(str[0] == 'a' && str.length > 3){
    console.log(`It is a good string.`);
}else{
    console.log("It is a bad string.");
}

// New Programme
let strr = "Aditya";
if((strr[0] == 'A' || strr[0] == 'a') && (strr.length > 5)){
    console.log("It is a Golden string.");
}else{
    console.log("It not a bad string.");
}