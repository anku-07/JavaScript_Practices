//Write a function expression named greet that takes two parameters: a name and a callback function. The callback function should receive the name and return a greeting message. Use the greet function with your name and an anonymous function that returns "Hello, [name]!" and log the result.

let greet = function(name,callback){
    return callback(name);
}

let anonymousGreeting = function(name){
    return `Hello, ${name}`;
}

let result = greet("Aditya",anonymousGreeting);

console.log(result);