const student={
    fname:"Rachel",
    lname:"Bosco",
    age:19,
    fullname: function()
    {
        console.log("Student fullname is:", this.fname +" "+ this.lname);
        console.log(`Student first name is: ${this.fname} last name is:${this.lname} and she is ${this.age} years old`);
    }
};
student.fullname()