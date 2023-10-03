function hello(){
    console.log("hello world");
}
// const hello = {key1: "vlaue"};

// javascript functiom ==> function + object
// console.log(hello.name);

// you can add your own properties
hello.myOwnProperty = "very unique value";
console.log(hello.myOwnProperty);

// name property ---> tells funstion name;
// functiom provide more usefull properties
// call, bind etc


// function can give us free space
// what is free space --> object {} called "prototype"

//Prototype :  isse isliye use karte hai agar funtion koi naya key value add karna pade to kar sakte hai
hello.prototype; 
console.log(hello.prototype);

// Only function provide 'prototype' property

// if(hello.prototype)
// {
//     console.log("prototype present hai");
// }
// else{
//     console.log("prototype present nhi hai");
// }

hello.prototype.abc ="abc";
hello.prototype.sing = function(){
    return "la la lla";
}
console.log(hello.prototype.sing());
console.log(hello.prototype);
