// how to iterate object
const person = {
    name:"Masum",
    age : 20,
    hobbies: ["music", "photograpgy"]
};
//for in lopp
// object.keys

for(let key in person)
{
    console.log(person[key]);
    console.log(`${key} : ${person[key]}`);
    console.log(key, " : ",person[key]);
}

console.log(typeof(person));

for(let key of Object.keys(person))
{
    console.log(person[key]);
}