//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.
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
//Sort each array in decending order.
function findMaximumNumber (arrayName) {
    let storedNumber = arrayName[0];
    for (let i = 0; i < arrayName.length; i++) {
        if (arrayName[i] > storedNumber) {
            storedNumber = arrayName[i];
        }
    }
    return storedNumber;
}

function sortByMaximum (arrayName) {
    let array = [];
    while (arrayName.length > 0) {
      array.push(findMaximumNumber(arrayName));
      arrayName.splice(arrayName.indexOf(findMaximumNumber(arrayName)), 1);
    }
    console.log(array);
    return array;
    
  }
sortByMinimum(nums2);
sortByMaximum(nums3);