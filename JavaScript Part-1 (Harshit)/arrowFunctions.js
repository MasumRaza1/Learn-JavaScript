// Arrow function
// Arrow function me this nhi hoga
// Arrow function apna this apne surrounding se le



const user1 = {
    firstName : "Masum",
    age : 20,
    about :  () => {
        console.log(this.firstName, this.age)
    }
   
}
user1.about();