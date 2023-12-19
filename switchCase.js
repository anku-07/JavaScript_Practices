// Switch Case
/*
Qn-1:
Write a program that takes a student's score as input and uses a switch-case statement to display their corresponding grade (A, B, C, D, or F).
*/
alert("90 or above: A 80-89: B 70-79: C 60-69: D Below 60: F");
let score = parseInt(prompt("Enter your number :"));
let grade;
switch(true){
    case score >= 90 :
    grade = 'A';
    break;
    case score >= 80 :
    grade = 'B';
    break;
    case score >= 70 :
    grade = 'C';
    break;
    case score >= 60 :
    grade = 'D';
    break;
    case score < 60 :
    grade = 'F';
}
console.log(grade);


/*
Qn-2:
Create a program that takes a number representing a day of the week (1 for Monday, 2 for Tuesday, etc.) and outputs the name of the day.
*/
let weekdays = parseInt(prompt("Enter weekday number and show what is today : "));

switch(weekdays){
    case 1:
        console.log("Monday.");
        break;
    case 2:
        console.log("Tuesday.");
        break;
    case 3:
        console.log("Wednesday.");
        break;
    case 4:
        console.log("Thrusday.");
        break;
    case 5:
        console.log("Friday.");
        break;
    case 6:
        console.log("Saturday.");
        break;
    case 7:
        console.log("Sunday.");
        break;
    default:
        console.log("Enter valid weekdays");
}


/*
Qn-3:
Implement a language translator that takes the abbreviation of a language ("en" for English, "es" for Spanish, "fr" for French) and displays the full name of the language.
*/
alert(" 'en' for English, 'es' for Spanish, 'fr' for French");
let lang = prompt("Enter short from of any language : ");
switch(lang){
    case "en":
        console.log("English");
        break;
    case "es":
        console.log("Spanish");
        break;
    case "fr":
        console.log("French");
        break;
    default:
        console.log("Enter any of them.");
}


/*
Qn-4:
Given a fruit name entered by the user, use a switch-case statement to determine if it's a citrus fruit ("orange", "lemon", "lime", etc.) or not.
*/
let fruitName = prompt("Enter a fruit name : ").toLowerCase();
let isCitrus;
switch(fruitName){
    case 'orange':
    case 'lemon':
    case 'lime':
    case 'grapefruit':
    case 'mandarin':
        isCitrus = true;
        break;
        default:
        isCitrus = false;
}
if(isCitrus){
    console.log(`${fruitName} is a citrus fruit.`);
}else{
    console.log(`${fruitName} is not a citrus fruit.`);
}


/*
Qn-5:
Take a vehicle type code (1 for car, 2 for bike, 3 for truck) and display the type of vehicle.
*/
let code = parseInt(prompt("Enter vehicle code : "));
let vType ;

switch(code){
    case 1 :
        vType = "car";
        break;
    case 2 :
        vType = "bike";
        break;
    case 3 :
        vType = "truck";
        break;
}
console.log(`${vType}`);

/*
Qn-6:
Using switch-case, create a program that takes a cardinal direction abbreviation ("N" for North, "S" for South, "E" for East, "W" for West) and displays the full direction.
*/
let direction = prompt("Enter direction : ").toLowerCase();
let directionName;

switch(direction){
    case "n" :
        directionName = "North";
        break;
    case "s":
        directionName = "South";
        break;
    case "e":
        directionName = "East";
        break;
    case "w":
        directionName = "West";
        break;
    default:
        directionName = "Enter valid direction name";
        break;
}

console.log(`${direction} for ${directionName}.`)

/*
Qn-7:
Given a month number (1 for January, 2 for February, etc.), create a program to determine if it's a month with 30 days, 31 days, or February (considering leap years is optional).
*/
let monthNum = parseInt(prompt("Enter month number : "));
let monthDays;
switch(monthNum){
    case 1:
        monthDays = "January,31 Days";
        break;
    case 2:
        monthDays = "February,29 Days";
        break;
    case 3:
        monthDays = "March,31 Days";
        break;
    case 4:
        monthDays = "April,31 Days";
        break;
    case 5:
        monthDays = "May,31 Days";
        break;
    case 6:
        monthDays = "June,30 Days";
        break;
    case 7:
        monthDays = "July,31 Days";
        break;
    case 8:
        monthDays = "August,30 Days";
        break;
    case 9:
        monthDays = "September,31 Days";
        break;
    case 10:
        monthDays = "October,31 Days";
        break;
    case 11:
        monthDays = "November,30 Days";
        break;
    case 12:
        monthDays = "December,31 Days";
        break;
    default:
        monthDays ="Enter valid month number";
        break;
}
console.log(`${monthDays}`);


/*
Qn-8:
Based on the weather condition provided by the user ("sunny", "rainy", "cloudy", "snowy"), suggest an activity using switch-case statements.
*/
const weatherCondition = prompt("Enter weather condition(sunny,rainy,cloudy,snowy)").toLowerCase();

let activity;

switch(weatherCondition){
    case 'sunny':
        activity = "Go for a picnic or a walk in the park.";
        break;
    case 'rainy':
        activity = "Stay indoors and read a book or watch a movie.";
        break;
    case 'cloudy':
        activity = "Go for a hike or spend time with indoor hobbies.";
        break;
    case 'snowy':
        activity = "Build a snowman or have a hot chocolate indoors.";
        break;
    default:
        activity = "Enter suggestions only."
        break;
}
console.log(`${activity}`);


/*
Qn-9:
Classify a number as positive, negative, or zero using a switch-case statement.
*/
let num = parseInt(prompt("Enter a number : "));
let numCheck;

switch(Math.sign(num)){
    case 0:
        numCheck = "Number equal to zero.";
        break;
    case 1:
        numCheck = "Positive number.";
        break;
    case -1:
        numCheck = "Negative number.";
        break;
    default:
        numCheck = "Not a number.";
        break;
}
console.log(`${numCheck}`);


/*
Qn-10:
Given a card code (1 for hearts, 2 for diamonds, 3 for clubs, 4 for spades), display the suit of the card.
*/
const code = parseFloat(prompt("Enter card code : "))
let card;

switch(code){
    case 1 :
        card = "Hearts";
        break;
    case 2 :
        card = "Diamonds";
        break;
    case 3 :
        card = "Clubs";
        break;
    case 4 :
        card = "Spades";
        break;
    default:
        card = "Enter valid card code";
        break;
}
console.log(`${card}`);
