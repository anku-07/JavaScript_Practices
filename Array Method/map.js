let newArr = [1,2,3,4,5];
let double = newArr.map((el)=>{
    return el*2;
})

// ON OBJECT
let students = [
    {
        name : "Aditya",
        marks : 98
    },
    {
        name : "Arghya",
        marks: 97
    },
    {
        name : "Hriday",
        marks: 96
    }
];

let gpa = students.map((el)=>{
    return el.marks/10;
});
