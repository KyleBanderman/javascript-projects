// Initialize Variables below
let date = "Monday 2019-03-18";
let time = '10:05:34 AM';
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKb = astronautCount * averageAstronautMassKg;
let fuelMassKb = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKb + fuelMassKb + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {
    console.log("Astronaut Count is " + astronautCount);
} else {
    console.log("Too many astronauts");
    preparedForLiftOff = false;
}
// add logic below to verify all astronauts are ready
if (astronautStatus === "ready") {
    console.log("Astronauts are ready");
} else {
    console.log("Astronauts are not ready");
    preparedForLiftOff = false;
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg < maximumMassLimit) {
    console.log("Mass is cleared");
} else {
    console.log("Too much mass on the shuttle");
    preparedForLiftOff = false;
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius > minimumFuelTemp || fuelTempCelsius < maximumFuelTemp) {
    console.log("Fuel Temperature in a valid range");
} else {
    console.log("Fuel is not in valid range. Check Fuel Temperature");
    preparedForLiftOff = false;
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel === "100%") {
    console.log("Fuel is Full");
} else {
    console.log("Refill Fuel before takeoff");
    preparedForLiftOff = false;
}
// add logic below to verify the weather status is clear
if (weatherStatus === "clear") {
    console.log("Skies are clear");
} else {
    console.log("Skies are cloudy. Delay Takeoff");
    preparedForLiftOff = false;
}
// Verify shuttle launch can proceed based on above conditions
if (preparedForLiftOff === true) {
    console.log("Prepared for Liftoff")
} else {
    console.log("Launched not cleared");
}