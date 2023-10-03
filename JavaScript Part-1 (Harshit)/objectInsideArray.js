// Object inside Array

const users = [
    {name : "Masum", age : 20, Mobile : 821053739},
    {name : "Binod", age : 82, Mobile : 82763527}
];

// console.log(users);

for(let user of users) {
    console.log(user.name);
}

//nested Destructuturing
// const [ user1, user2, user3] = users;
const [{name,Mobile}, {age}] = users;
console.log(name);
console.log(Mobile);
console.log(age);