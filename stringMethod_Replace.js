// String Method Replace.
/*
Qn-1:
Replace a Specific Character in a String:
Replace all occurrences of a specific character in a string with another character without using the replace function. For instance, replace all 'a's with 'z's in the string "banana".
*/
const fruit = 'banana';
console.log(fruit.replace('a','z').replace('a','z').replace('a','z'));

/*
Qn-2:(****)
Swap two words in a given string without using the replace function. For example, in the string "Hello World", swap 'Hello' with 'World' so that the string becomes "World Hello".
*/
let str = 'Hello World!';

let words = str.split(' ');
if(words.length >= 2){
    let temp  = words[0];
    words[0] = words[1];
    words[1] = temp;

    let swappedString = words.join(' ');
    console.log(swappedString);
}else{
    console.log("String doesn't contain enough words to swap.");
}

/*
Qn-3:(***)
Remove a specific word from a sentence without using the replace function. For instance, remove the word 'lazy' from the string "The quick brown lazy fox jumps over the lazy dog."
*/
let sentance = "The quick brown lazy fox jumps over the lazy dog."
let wordToRemove = "lazy";
let newwords = sentance.split(' ');
let filterdWords = newwords.filter(word => word !== wordToRemove);
let updatedSentance = filterdWords.join(' ');
console.log(updatedSentance);


/*
Qn-4:
Replace a substring in a given string without using the replace function. For instance, replace 'fox' with 'cat' in the string "The quick brown fox jumps over the lazy dog."
*/
let orginalString = "The quick brown fox jumps over the lazy dog.";
let subStringToReplace = "fox";
let replacement = "cat";

let index = orginalString.indexOf(subStringToReplace);

if(index !== -1){
    let updatedString = 
        orginalString.substring(0,index)+
        replacement+
        orginalString.substring(index + subStringToReplace.length);
        console.log(updatedString);
}else{
    console.log("Substring not found in the string.");
}

/*
Qn-5:
Replace a specific word in a string with its uppercase version without using the replace function. For example, replace 'apple' with 'APPLE' in the string "I have an apple and a banana."
*/
let sentence = "I have an apple and a banana.";
let wordToReplace = "apple";

let word = sentence.split(' ');

for (let i = 0; i < words.length; i++) {
    if (word[i].toLowerCase() === wordToReplace.toLowerCase()) {
        let upperCaseWord = word[i].toUpperCase();
        word[i] = upperCaseWord;
        break; // Assuming only the first occurrence needs to be replaced
    }
}

let updatedSentence = word.join(' ');
console.log(updatedSentence);
