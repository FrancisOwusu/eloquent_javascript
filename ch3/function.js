const square = (x) => {
  return x * x;
};

console.log(square(9));

const makeNoise = function () {
  console.log("Pling!");
};
makeNoise();

const roundTo = function (n, step) {
  let remainder = n % step;
  return n - remainder + (remainder < step / 2 ? 0 : step);
};
console.log(roundTo(23, 10));

function roundToUpdated(n, step = 1) {
  let remainder = n % step;
  return n - remainder + (remainder < step / 2 ? 0 : step);
}

console.log(roundTo(4.5));
// → 5
console.log(roundTo(4.5, 2));
// → 4
//Nested scope
const hummus = function (factor) {
  const ingredient = function (amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
  };
  console.log(`${ingredientAmount} ${unit} ${name}`);
};
ingredient(1, "can", "chickpeas");
ingredient(0.25, "cup", "tahini");
ingredient(0.25, "cup", "lemon juice");
ingredient(1, "clove", "garlic");
ingredient(2, "tablespoon", "olive oil");

//
console.log("The future says:", displayMessage());
function displayMessage() {
  return "You'll never have flying cars";
}

//closure

function multiplier(factor) {
  return (number) => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));

//recursion
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}
console.log(power(2, 3));
// → 8

function multiplier(factor) {
  return (number) => number * factor;
}
let twice = multiplier(2);
console.log(twice);

function printFarmInventory(cows, chickens) {
  let cowString = String(cows);
  while (cowString.length < 3) {
    cowString = "0" + cowString;
  }
  console.log(`${cowString} Cows`);
  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
  }
  console.log(`${chickenString} Chickens`);
  77;
}
printFarmInventory(7, 11);

function printZeroPaddedWithLabel(number, label) {
  let numberString = String(number);
  while (numberString.length < 3) {
    numberString = "0" + numberString;
  }
  console.log(`${numberString} ${label}`);
}
function printFarmInventory(cows, chickens, pigs) {
  printZeroPaddedWithLabel(cows, "Cows");
  printZeroPaddedWithLabel(chickens, "Chickens");
  printZeroPaddedWithLabel(pigs, "Pigs");
}
printFarmInventory(7, 11, 3);

//refactor of printFarmInventory
function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}
function printFarmInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}


function countBs(str) {
  return countChar(str, 'B');
}

function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
          count++;
      }
  }
  return count;
}

// Example usage:
const str = "Big Bang Theory";
console.log(countBs(str)); // Output: 2
console.log(countChar(str, 'i')); // Output: 3