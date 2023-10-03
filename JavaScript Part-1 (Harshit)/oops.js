// proto , prototype , class

// const user = {
//     firstName : "Masum",
//     lastName : "Raza",
//     email : "masumrazacse@gmail.com",
//     address : "Jharkhand",
//     age : 20,
//     about : function () {
//         return `${this.firstName} is ${this.age} years`; 
//     },
//     is18 : function(){
//         return this.age >= 18;
//     }
   
// }
// const aboutUser = user.about();
// console.log(aboutUser);

// function (that function create object)
// 2) add key value pair
// 3) object ko return karega

function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old`; 
    },
    user.is18 = function(){
        return this.age >= 18;
    }
    return user;
}
const user1 = createUser('Masum', 'Raza', 'masumrazcse@gmail.com', 20, 'myAddress');
const user2 = createUser('Masum', 'Raza', 'masumrazcse@gmail.com', 20, 'myAddress');
console.log(user1);

const is18 = user1.is18();
console.log(is18);

const about = user1.about();
console.log(about);