// Getter and setter
// get se hum bina () k use kar sakte hai, property k jaisa
//set se hum baat me chage kar skte hai

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return ` ${this.firstName} ${this.lastName}`;
    }
    // setName(firstName, lastName){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }

    set fullName(fullName){
        const [firstName, lastName] =fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }

}
const person1 = new Person("Masum","Raza",21);
// console.log(person1.fullName()); 
console.log(person1.fullName);// bina () k use ho property k jaisa by get
console.log(person1.firstName);
console.log(person1.lastName);
// person1.setName("Binod", "Tappa");
// console.log(person1.firstName);
// console.log(person1.lastName);

person1.fullName= "Binod Thappa";
console.log(person1);