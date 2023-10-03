const key = "email";

const person = {
    name:"Masum",
    age : 20,
    hobbies: ["music", "photograpgy"]
};
console.log(person["hobbies"]);

person[key] = "masumraza4444@gmail.com";
console.log(person);