// new keyword
function createUsers(firstName, age){
    this.firstName = firstName;
    this.age = age;
}
createUsers.prototype.about = function()
{
    console.log(this.firstName, this.age);
}

const user1 = new createUsers("masum", 78);
console.log(user1);

// new keyword 3 kaam kar rha hai 
// 1. empty object this = {}
// 2. return this 
// 3. Object.create(createUser.prototype)

user1.about();