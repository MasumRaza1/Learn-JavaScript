// Function returning function

function myFunc(){
    function hello(){
        // console.log("heloow");
        return "hello world";
    }
    return hello;
}
const ans = myFunc();
 console.log(ans());
ans();