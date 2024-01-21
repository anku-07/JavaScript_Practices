const student = {
    name : "Aditya",
    math : 99,
    phy : 93,
    chem : 91,
    getAvg(){
        let avg = (this.math+this.phy+this.chem)/3;
        console.log(avg);
    }
};