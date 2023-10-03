// callBack Function

function myFun2(){
    console.log("Inside Function 2");
}


function myFun(callBack){
    // sql query
    // const data = {}
    console.log('hello');
    callBack();
}
myFun(myFun2);