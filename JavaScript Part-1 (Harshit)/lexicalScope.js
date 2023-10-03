//lexical scope
let myVar = "value66";
function myApp(){
    const myVar = "value1";
    function myFun(){
      
        console.log("Inside funFun",myVar)
    }
    const myFunc2 = function(){}
    const myFun3 = () => {}
    console.log(myVar);
    myFun();

}
myApp();