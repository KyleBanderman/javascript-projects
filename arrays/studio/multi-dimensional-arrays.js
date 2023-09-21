const input = require('readline-sync');
<<<<<<< HEAD

=======
>>>>>>> 8863f1fe0a172d69fb789756f52909326aaf1cba
let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";
let userInput = input.question("Which cabinet would you like to access?");
let userInputTwo = input.question("What item are you searching for?");
//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
<<<<<<< HEAD
let foodArray = food.split(",").sort();
let equipmentArray = equipment.split(",").sort();
let petsArray = pets.split(",").sort();
let sleepAidsArray = sleepAids.split(",").sort();
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [foodArray, equipmentArray, petsArray, sleepAidsArray];
console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
userInputOne = (input.question("Which Cabinet do you want to check?") - 1);
console.log(cargoHold[userInputOne]);
=======
foodArray = food.split(",").sort();
equipmentArray = equipment.split(",").sort();
petsArray = pets.split(",").sort();
sleepAidsArray = sleepAids.split(",").sort();
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
cargoHold = [foodArray, equipmentArray, petsArray, sleepAidsArray];
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.\
>>>>>>> 8863f1fe0a172d69fb789756f52909326aaf1cba
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (userInput > cargoHold.length) {
    console.log(`Sorry. There is no cabinet ${userInput}. Please select a different cabinet.`)
} else if (cargoHold[userInput - 1].includes(userInputTwo)){
    console.log(cargoHold[userInput - 1]);
    console.log(`Cabinet ${userInput} does contain ${userInputTwo}`);
} else {
    console.log(cargoHold[userInput - 1]);
    console.log(`Cabinet ${userInput} does not contain ${userInputTwo}`);
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
