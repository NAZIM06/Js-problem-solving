// 1st problem

function mindGame(num) {
  if (typeof num !== 'number' || num <= 0) {
    return "Input must be a positive number.";
  } else {
    return (num * 3 + 10) / 2 - 5;
  }
}
// console.log(mindGame(50));

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
// console.log(evenOdd(123));

// 3rd problem


function isLGSeven(num) {
  if (typeof num !== "number") {
    return "Input must be a number";
  }
  let difference = num - 7;
  if (difference < 7) {
    return 7 - num;
  } else {
    return difference * 2;
  }
}
// console.log(isLGSeven(-15));
// console.log(isLGSeven("seven")); 

// 4th problem

function findingBadData(arr) {
  let badDataCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return "Input must contain only numbers";
    }
    if (arr[i] < 0) {
      badDataCount++;
    }
  }
  return badDataCount;
}
// console.log(findingBadData([-1, 2, 3, -4, 5])); 
// console.log(findingBadData([ 2, -5, -7, -13 ]));

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
// console.log(gemsToDiamond(1, 1, 1));
// console.log(gemsToDiamond(20, 200, 50));
// console.log(gemsToDiamond(100, 5, -100));
// console.log(gemsToDiamond(0, 0, 0 ));
