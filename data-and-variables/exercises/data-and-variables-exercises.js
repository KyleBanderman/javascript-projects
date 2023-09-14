// Declare and assign the variables below

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below

let nameOfShuttle = "Apollo 16";
let shuttleSpeedmph = 17500;
let distanceToMarskm = 225000000;
let distanceToMoonkm = 384400;
let milesPerKilometer = 0.621;

console.log(typeof nameOfShuttle);
console.log(typeof shuttleSpeedmph);
console.log(typeof distanceToMarskm);
console.log(typeof distanceToMoonkm);
console.log(typeof milesPerKilometer);

let milesToMars = distanceToMarskm * milesPerKilometer;
console.log(milesToMars);

let hoursToMars = milesToMars / shuttleSpeedmph;
console.log(hoursToMars);

let daysToMars = hoursToMars / 24;
console.log(nameOfShuttle + " will take " + daysToMars + " days to reach Mars.");

//Start of Moon Calcs

let milesToMoon = distanceToMoonkm * milesPerKilometer;
let hoursToMoon = milesToMoon / shuttleSpeedmph;
let daysToMoon = hoursToMoon / 24;

console.log(nameOfShuttle + " will take " + daysToMoon + " days to reach the Moon.");