// Methods
// function inside object


// const person = {
//     firstName : "Masum",
//     age : 20, 
//     about: function()
//     {
//         console.log(`Person name is ${this.firstName} and age is ${this.age} `)
//     }
// }

// person.about();

function personInfo(){
    console.log(`Person name is ${this.firstName} and age is ${this.age} `);
}

const person1 = {
    firstName : "Masum",
    age : 20, 
    about: personInfo
}
const person2 = {
    firstName : "Binod",
    age : 22, 
    about: personInfo
}
const person3 = {
    firstName : "Gopal",
    age : 21, 
    about: personInfo
}
person1.about();
person2.about();
person3.about();

// console.log(this);