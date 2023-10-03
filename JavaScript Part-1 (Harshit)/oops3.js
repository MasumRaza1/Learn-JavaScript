class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`;
    }
    isSuperCute(){
        return this.age <= 1;
    }
    isCute(){
        return true;
    }
}

const animal = new Animal("tom",2);
console.log(animal);
console.log(animal.eat());
console.log(animal.isCute());


class dog{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`;
    }
    isSuperCute(){
        return this.age <= 1;
    }
    isCute(){
        return true;
    }
}
const tommy = new dog("tommy",3);
console.log(tommy);
console.log(tommy.eat());
console.log(tommy.isCute());


// inheritance  
// animal ka constructor call ho rha hai
class dog1 extends Animal {
     constructor(name, age, speed){
        super(name,age);
        this.speed = speed;
     }
     eat(){
        return `MOdify string ${this.name} is eating `;
     }
     run(){
        return `${this.name} is running at ${this.speed}`;
     }
}
const tommy1 = new dog1("tommy1",3,45);
console.log(tommy1);
console.log(tommy1.eat());
console.log(tommy1.isCute());
console.log(tommy1.run());
console.log(tommy1.eat());