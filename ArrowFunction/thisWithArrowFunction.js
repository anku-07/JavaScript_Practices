const student = {
    name : "Aditya",
    marks : 97,
    prop : this, // global Scope
    getName : function(){
        console.log(this)
        return this.name;
    },
    getMarks : () => {
        console.log(this);
        return this.marks; // perent 's scope -> window
    },
    getInfo1: function() {
        setTimeout(() => {
            console.log(this); // student
        },2000);
    },
    getInfo2:function(){
        setTimeout(function(){
            console.log(this);
        },2000);
    },
};
