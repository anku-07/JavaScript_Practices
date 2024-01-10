// Write a JavaScript function to extract unique characters from a string.Example:str=“abcdabcdefgggh”
// ans=“abcdefgh”
let str = "abcdabcdefgggh";

function getUniqueChar(str){
    let ans = "";
    for(let i = 0; i < str.length; i++){
        let currenChar = str[i];
        if(ans.indexOf(currenChar) == -1){
            ans += currenChar;
        }
    }
    return ans;
}

getUniqueChar(str);