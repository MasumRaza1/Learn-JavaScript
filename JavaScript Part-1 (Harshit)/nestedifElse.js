// winning number 19
// 19 is your guess is right
// 17 too low
// 21 too high

let winningNumber = 19;
let userGuess = +prompt("Guess a number");
// console.log(typeof(userGuess));

if(userGuess == winningNumber)
{
    alert("19 is right anser");
}
else if(userGuess > winningNumber)
{
    alert("Too high");
}
else{
    alert("Too Low");
}

