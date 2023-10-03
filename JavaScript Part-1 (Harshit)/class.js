// class 

class createUser{
    constructor(firstName, lastName, email, age, address){
        console.log("constructor call");
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    about(){
        return `${this.firstName} is ${this.age} years old`; 
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return "Lal lala lla";
    }
}
const user1 = new createUser('Masum', 'Raza', 'masumrazcse@gmail.com', 20, 'myAddress');
const user2 = new createUser('Masum', 'Raza', 'masumrazcse@gmail.com', 20, 'myAddress');
console.log(user1.about());