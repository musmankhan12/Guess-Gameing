#! /usr/bin/env node
import inquirer from "inquirer";
//1) computer will generate a random number - done.
//2)user input for guessing number - done.
//3)compare user input with compuyer generated number and show result - done.
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "Welcome To Cli Guessing Game!",
        message1: "Please Guide A Number Between 1-10:"
    }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you Guessed Right Number.");
}
else {
    console.log("You Guessed Wrong Number");
}
