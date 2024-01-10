// Example of High Order function
function multipleGreet(func, count){
    for(let i = 1; i <= count; i++){
        greet();
    }
}

let greet = function(){
    console.log("Hello!");
}

// Calling the multipleGreet function.
multipleGreet(greet,5) // greet and 5 is argument

multipleGreet(function(){console.log("World!")},100); // We can pass a Function as argument like this


// multipleGreet(greet(),5); // We can't pass a function like this bcz we call the function not as argument so is gone error

// For Example
// greet();
// greet();
// greet();
// greet();