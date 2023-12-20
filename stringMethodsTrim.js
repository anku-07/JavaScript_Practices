/*
Qn-1:
Create a variable str and assign a string with leading and trailing spaces. Use the trim method to remove these spaces and log the result.
*/
let str = "          Adi           ";
console.log(str.trim());


/*
Qn-2:
Trimming with Concatenation: Declare two strings word1 and word2, where word1 has trailing spaces and word2 has leading spaces. Concatenate them together and use trim to remove the extra spaces. Log the trimmed string.
*/
let str1 = "      Adi";
let str2 = "Piku         ";
let concat = str1 +str2;
console.log(`Before concat ${concat}`);
console.log(`After triming ${concat.trim()}`);


/*
Qn-3:
Whitespace Trimming: Create a string sentence with multiple spaces between words. Use trim to remove any leading or trailing spaces and log the result.
*/

let msg = "      I  am  a software  engineer   ";
console.log(msg.trim());

let sentence = "   This    is   a   sentence   with   spaces    ";
let trimmedSentence = sentence.trim();

console.log(trimmedSentence);


/*
Qn-4:
Trimming Tabs: Define a string tabString that contains tabs at the start and end. Apply trim to eliminate these tabs and display the trimmed string.
*/
let tabStr = "      This is a tab string    ";
console.log(tabStr.trim());


/*
Qn-5:
Mix of Spaces and Tabs: Form a string mixedString with a combination of spaces and tabs both at the beginning and end. Use trim to remove these mixed spaces and tabs and log the trimmed output.
*/
let mixedString = "     This is mixed string of spaces and tab.          ";
console.log(mixedString.trim());


/*
Qn-6:
Trimming Newlines: Generate a string newlineString with newline characters at the start and end. Utilize trim to remove these newlines and display the trimmed result.
*/
let newlineString = "\n\n This is a new line string \n \n";
console.log(newlineString.trim());


/*
Qn-7:
Empty String Trimming: Initialize an empty string emptyTrimString and use trim on it. Log the result to observe what happens.
*/
let emptyString = " ";
let trimedEmptyString = emptyString.trim();
console.log(trimedEmptyString);


/*
Qn-8:
Trimming with No Spaces: Create a string noSpacesString without any leading or trailing spaces. Apply trim on this string and observe the output.
*/
let noSpacesString = "This is a no spaces string.";
let trimedNoSpacesString = noSpacesString.trim();
console.log(trimedNoSpacesString);


/*
Qn-9:
Trimming with Non-breaking Spaces: Generate a string nbspString with non-breaking spaces (e.g., "\u00A0") at the beginning and end. Use trim to remove these spaces and log the trimmed output.
*/
let nbsp = "\u00A0";
let nbspString = nbsp + "This is a string with non-breaking spaces"+nbsp;
// console.log(nbspString);
let trimedNbspString = nbspString.trim();
console.log(trimedNbspString);


/*
Qn-9:
Trimming with Unicode Spaces: Form a string unicodeString with Unicode spaces (such as \u2003 for an em space) at the start and end. Apply trim to remove these Unicode spaces and display the trimmed result.
*/
let unicode = "\u2003";
let unicodeSpacesString = unicode + "This is unicode spaces string." + unicode;
let trimedUnicodeSpacesString = unicodeSpacesString.trim() ;
console.log(trimedUnicodeSpacesString);
console.log(unicodeSpacesString);
