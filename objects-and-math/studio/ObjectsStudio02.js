// Code your orbitCircumference function here:
function orbitCircumference (radius) {
  let output = Math.round(Math.PI*2*radius);
  return output;
}

// Code your missionDuration function here:
function missionDuration (numOfOrbits, orbitRadius = 2000, orbitSpeed = 28000) {
  let timeOfOrbits = 0;
  let distanceOfOrbits = 0;
  distanceOfOrbits = orbitCircumference(orbitRadius)*numOfOrbits;
  timeOfOrbits = Math.round(distanceOfOrbits/orbitSpeed*100)/100;
  console.log(`The mission will travel ${distanceOfOrbits} km around the planet, and it will take ${timeOfOrbits} hours to complete.`);
  return timeOfOrbits;
}

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry (inputArray) {
    let chosenNumber = 0;
    let selectedAnimal;
    chosenNumber = Math.floor(Math.random()*inputArray.length);
    selectedAnimal = inputArray[chosenNumber];

  return selectedAnimal;
}
// Code your oxygenExpended function here:
function oxygenExpended (candidateObject) {
  let hoursOfSpacewalk = missionDuration(3, 1500, 25001);
  let oxygenUsed = Math.round(candidateObject.o2Used(hoursOfSpacewalk)*100)/100;
  console.log(`${candidateObject.name} will perform the spacewalk, which will last ${hoursOfSpacewalk} hours and require ${oxygenUsed} kg of oxygen.`);
}

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
 let idNumbers = [291, 414, 503, 599, 796, 890];
 oxygenExpended(selectRandomEntry(crew));