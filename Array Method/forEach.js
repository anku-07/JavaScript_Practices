let arr = [1,2,3,4,5];
// let print = function(el){
//     console.log(el);
// }
// arr.forEach(print);

// OR
arr.forEach(function(el){
    console.log(el);
})
// With arrow function

arr.forEach((el) => {
    console.log(el);
});

// On Object

let student = [
    {
        name : "Aditya",
        marks : 97
    },{
        name : "Arghya",
        marks : 93
    },{
        name : "Hriday",
        marks : 92
    }
];

student.forEach((student) =>{
    console.log(student);
});
// if i want to print student marks
student.forEach((student)=>{
    console.log(student.marks);
})