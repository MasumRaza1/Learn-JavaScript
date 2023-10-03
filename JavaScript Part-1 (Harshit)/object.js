// objects is reference type
// array are good but not sufficient
// for real wold data
//object stores key value pair
// object don't have index

// how to create objects
const person = {name:"Masum", age:20};
console.log(person);

// how to access data from object
console.log(person.name);
console.log(person.age);


const person1 = {
    name:"Masum",
    age : 20,
    hobbies: ["music", "photograpgy"]
};
console.log(person1.hobbies);
console.log(person1["name"]);


//how to add key value pair to object
person1.gender="male";
person1["sex"] ="male";
console.log(person1);