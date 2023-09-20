//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let startingFuel = 0;
let numberOfAstronauts = 0;
let shuttleAltitude = 0;
const input = require('readline-sync');



/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

//start of 4-a
while (startingFuel === 0){
  startingFuel = input.question("How much fuel would you like to start with?");
  if (startingFuel <= 30000 && startingFuel >= 5000) {
    console.log("Starting fuel is verified.");
    break;
  } else {
    console.log("I'm sorry. Please enter a number between 5000 and 30000");
    startingFuel = 0;
  }
}

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
while (numberOfAstronauts === 0){
  numberOfAstronauts = input.question("How many astronauts would you like to start with?");
  if (0 < numberOfAstronauts && numberOfAstronauts <= 7){
    console.log("Number of astronauts verified");
    break;
  } else {
    console.log("I'm sorry. Please enter a number between 0 and 7");
    numberOfAstronauts = 0;
  }
}
  
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while (startingFuel >= 0){
  startingFuel = startingFuel - (100 * numberOfAstronauts)
  shuttleAltitude = shuttleAltitude + 50;
}

console.log(`The shuttle gained an an altitude of ${shuttleAltitude} km`);
if (shuttleAltitude >= 2000){
  console.log("Orbit achieved!");
} else {
  console.log("Failed to reach orbit.");
}
/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
