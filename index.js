// 1st problem

function mindGame(num) {
  if (typeof num !== 'number' || num < 0) {
    return "Input must be a positive number.";
  } else {
    return (num * 3 + 10) / 2 - 5;
  }
}
// console.log(mindGame(33));

//Description 1:
//  The function "mindGame" takes a positive number as input and returns the calculation (num * 3 + 10) / 2 - 5. If the input is not a positive number, the function returns "Input must be a positive number.



// 2nd problem

function evenOdd(str) {
  if (typeof str !== "string") {
    return "Input must be a string";
  } else if (str.length % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// console.log(evenOdd("hero"));

//Description 2:
// This code defines a JavaScript function called "evenOdd" that takes a string as input and returns "even" or "odd" depending on the length of the string.If the input is not a string, the function returns Invalid Input.

// 3rd problem

function isLGSeven(num) {
  if (typeof num !== 'number') {
  return "Input must be a number.";
  } else if (num < 7) {
  return num - 7;
  } else {
  return num * 2;
  }
  }
// console.log(isLGSeven(-15)); 

//Description 3: 
// This code is a function called "isLGSeven" that takes in a number as input. If the input is not a number, it returns an error message. If the input is less than 7, it subtracts 7 from the number, otherwise it multiplies the number by 2.

// 4th problem

function findingBadData(arr) {
  let badDataCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number" && !Array.isArray(arr)) {
      return "Input must contain only numbers";
    }
    else if (arr[i] < 0) {
      badDataCount++;
    }
  }
  return badDataCount;
}
// console.log(findingBadData([ 2, -5, -7, -13 ])); 

//Description 4: 
//This function check bad data in an array,if any element is not a number it returns error. If all elements are numbers and numbers are less than 0 it counts as bad data and returns the number of elements.

// 5th problem

function gemsToDiamond(gems1, gems2, gems3) {
  if (typeof gems1 !== 'number' || gems1 < 0 || typeof gems2 !== 'number' || gems2 < 0 || typeof gems3 !== 'number' || gems3 < 0) {
    return "Input must be a positive number.";
  }
  let totalDiamond = gems1 * 21 + gems2 * 32 + gems3 * 43;
  if (totalDiamond > 1000 * 2) {
    totalDiamond = totalDiamond - 2000;
  }
  return totalDiamond;
}
// console.log(gemsToDiamond(1, "1", 1));

//Description 5: 
//The gemsToDiamond function takes in three numbers as input, converts them into diamonds, calculates the total number of diamonds, and returns the final number after subtracting 2000 if the total exceeds 2000.

