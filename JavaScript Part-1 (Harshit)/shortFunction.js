const user1 = {
    firstName : "Masum",
    age : 20,
    about() {
        console.log(this.firstName, this.age)
    }
   
}
user1.about();