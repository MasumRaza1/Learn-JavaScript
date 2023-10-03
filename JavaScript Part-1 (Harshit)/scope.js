// block scope vs function scope

// let and const are block scope
// var is function scope

{
    let firstName = "Masum";  // block
    console.log(firstName);
}
// console.log(firstName);

{
    // is block ki value "firstName dono alag alag hai"
    let firstName = "Mohit"; 
    console.log(firstName);
}


{  // var wala hum outside the block use kr skte hai
    // var mera kahi v use ho sakta h
    var lastName = "Raza";
}
console.log(lastName);


// ye pura page to hai ek block hi hai 
//isliye firstName uppar wale se alag alaga hai
const firstName = "garima";
console.log(firstName);

function myApp(){
    if(true)
    {
        let firstName = "masum";
        console.log(firstName);
    }
    console.log(firstName);   // garima print ho rha kyoki lexiacal se check kr rha h
                              
}
myApp();