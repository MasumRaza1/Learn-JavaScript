// call, apply, bind
function about (hobby, favMusic){
    console.log(this.firstName, this.age, hobby, favMusic)
}

const user1 = {
    firstName : "Masum",
    age : 20,
   
}
const user2 = {
    firstName : "Binod",
    age : 22,
    
}

// call
about.call(user2, "photography", "kaise hua");
// this will be bind to user2 
// this smjhega user 2 ko 

//apply
// array me parameter pass kr do
about.apply(user1, ["jawala", "kaise hua"]);


// bind  
// ye function return karega
const func = about.bind(user1, "jawala", "kaise hua");
func();