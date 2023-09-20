/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */
//start of 1-a
for (let i = 0; i < 21; i++){
    console.log(i);
}

//start of 1-b
for (let j = 3; j < 30; j = j + 2){
    console.log(j);
}

//start of 1-c
for (let k = 12; k > -15; k = k - 2){
    console.log(k);
}

//start of 1-d
for (let l = 50; l > 19; l--){
  if (l % 3 === 0) {
    console.log(l);
  }
}

/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].
*/
let str = "LaunchCode";
let array = [1, 5, "LC101", "blue", 42];
/*Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 
//start of 2-a
for (let m = 0; m < array.length; m++){
  console.log(array[m]);
}

//start of 2-b
for (let n = str.length - 1; n > -1; n--){
  console.log(str[n]);
}



/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */
let startingArray = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
let evenArray = new Array;
let oddArray = new Array;

for (let o = 0; o < startingArray.length; o++){
  if (startingArray[o] % 2 === 0) {
    evenArray.push(startingArray[o]);
  } else {
    oddArray.push(startingArray[o]);
  }
}

console.log(evenArray);
console.log(oddArray);