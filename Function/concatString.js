// Create a function that returns the concatenation of all strings in an array.
let str = ["hi","Hello","Bye","!"];

function concat(str){
    let result = "";

    for(let i = 0; i < str.length; i++){
        result += str[i];
    }

    return result;
}
