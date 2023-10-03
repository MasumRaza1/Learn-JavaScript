// Find Method

const myArray = ["Hello", "Cat", " dog", "lion"];

// function isLength3(string){
//     return string.length == 3;
// }

const binod = myArray.find((string)=>string.length===3);
console.log(binod);


const users = [
    {userId : 1, usersName: "Masum"},
    {userId : 2, usersName: "Gopal"},
    {userId : 3, usersName: "Ramesh"},
    {userId : 4, usersName: "Yahoo"},
];

const myUser = users.find((user)=>user.userId===3);
console.log(myUser);