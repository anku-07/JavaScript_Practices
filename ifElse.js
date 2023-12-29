/*
a. Write a function isEven that takes a number and returns true if it's even, otherwise false.
b. Create a function grade that takes a number score as input and returns 'A' if the score is above 90, 'B' if it's between 80 and 89, 'C' if it's between 70 and 79, 'D' if it's between 60 and 69, and 'F' if it's below 60.
*/
// Qn : A
function isEven(){
    let n = parseInt(prompt("Enter a number : "));
    if(n%2 == 0){
        return true;
    }else{
        return false;
    }
}
console.log(isEven());

// Qn : B
function grade(){
    let marks = parseInt(prompt("Enter your marks : "));
    let grade;
    if(marks >= 90 && marks <= 100){
        return grade = 'A';
    }else if(marks >= 80 && marks <= 89){
        return grade = 'B';
    }else if(marks >= 70 && marks <= 79){
        return grade = 'C';
    }else if(marks >= 60 && marks <= 69){
        return grade = 'D';
    }else if(marks <= 59){
        return grade = 'F';
    }else{
        return grade = "Enter valid marks";
    }
}
console.log(grade());
