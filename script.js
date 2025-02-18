// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
    // Write your code here
    let res = -Infinity;
    let largest = -Infinity;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] > largest) {
        largest = array[i];
      }
    }
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] > res && array[i] < largest) {
        res = array[i];
      }
    }
  
    return res;
  }
  
  // Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
  function calculateFrequency(string) {
    // Write your code here
    // Write your code here
    const res = {};
    for (let i = 0; i < string.length; i++) {
      if (string[i] >= "a" && string[i] <= "z") {
        if (!res[string[i]]) {
          res[string[i]] = 1;
        } else {
          res[string[i]] += 1;
        }
      }
    }
    // console.log(res);
    return res;
  }
  
  // Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
  function flatten(unflatObject) {
    // Write your code here
    let result = {};
  
    for (const i in unflatObject) {
      if (typeof unflatObject[i] === "object") {
        const temp = flatten(unflatObject[i]);
        for (const j in temp) {
          result[i + "." + j] = temp[j];
        }
      } else {
        result[i] = unflatObject[i];
      }
    }
    // console.log(result);
    return result;
  }
  
  // Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
  function unflatten(flatObject) {
    // Write your code here
    let result = {};
    for (const key in flatObject) {
      const septKey = key.split(".");
      let curr = result;
      for (let j = 0; j < septKey.length - 1; j++) {
        curr[septKey[j]] = curr[septKey[j]] || {};
        curr = curr[septKey[j]];
      }
  
      curr[septKey[septKey.length - 1]] = flatObject[key];
    }
    // console.log(result);
    return result;
  }
  