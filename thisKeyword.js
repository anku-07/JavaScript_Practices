const student = {
    name : "Aditya",
    age : 22,
    eng : 98,
    math : 99,
    phy : 93,
    // Using method
    getAvg(){
        // console.log(this)
        let avg = (this.eng + this.math + this.phy)/3;
        console.log(avg);
    }
};
