function findMinimumNumber (arrayName) {
  let storedNumber = arrayName[0];
  for (let i = 0; i < arrayName.length; i++) {
      if (arrayName[i] < storedNumber) {
          storedNumber = arrayName[i];
      }
  }
  return storedNumber;
}

function sortByMinimum (arrayName) {
  let array = [];
  while (arrayName.length > 0) {
    array.push(findMinimumNumber(arrayName));
    arrayName.splice(arrayName.indexOf(findMinimumNumber(arrayName)), 1);
  }
  console.log(array);
  return array;
  
}

//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.

/*Within the function:
1) Define a new, empty array to hold the final sorted numbers.
2) Use the findMinValue function to find the minimum value in the old array.
3) Add the minimum value to the new array, and remove the minimum value from the old array.
4) Repeat parts b & c until the old array is empty.
5) Return the new sorted array.
6) Be sure to print the results in order to verify your code.*/

//Your function here...

/* BONUS MISSION: Refactor your sorting function to use recursion below:
 */

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];
sortByMinimum(nums2);