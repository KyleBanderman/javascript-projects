function randomFromArray(arr){
  let chosenIndex = Math.floor(Math.random()*arr.length);
  return arr[chosenIndex];
}

//TODO: Export the randomFromArray function.
module.exports = {
  randomFromArray: randomFromArray
}