// function inside function

const app = () => {
    const myFun = () =>{
        console.log("hellow from myFun");
    }
    console.log("inside fun");
}

app();