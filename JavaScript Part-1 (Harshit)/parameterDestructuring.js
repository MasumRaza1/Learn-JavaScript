// parameter Destructuring

// object 
// react

const person = {
    firstname: "Masum",
    age : 20
}
// function printDetail(obj){
//     console.log(obj.firstname);
//     console.log(obj.age);
// }
function printDetail({firstname, age}){
    console.log(firstname);
    console.log(age);
}


printDetail(person);