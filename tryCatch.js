// try&catch

console.log("Hello");
console.log("Hello");

// for testing error we used try and catch
// try{
//     console.log(a);
// }catch{
//     console.log("Catch an error... a is not defined");
// }

// we can do this

try{
    console.log(a);
}catch(err){
    console.log("caught an error a is not defined")
    console.log(err);
}
console.log("Hello2");
console.log("Hello2");