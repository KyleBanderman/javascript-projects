const input = require('readline-sync');
let str = "LaunchCode";
userInput = input.question("How many letters would you like to move?");
let userCut = str.slice(0, userInput);
let userCutTwo = str.slice(userInput);
let defaultCut = str.slice(0, 3);
let defaultCutTwo = str.slice(3);
//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

//Use a template literal to print the original and modified string in a descriptive phrase.

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (userInput >= str.length) {
    console.log(`Sorry. You picked ${userInput} which is too large. So I'm doing 3 instead.`);
    console.log(`The original phrase was ${str}. The new phrase is ${defaultCutTwo}${defaultCut}.`);
} else {
    console.log(`The original phrase was ${str}. The new phrase is ${userCutTwo}${userCut}.`);
}