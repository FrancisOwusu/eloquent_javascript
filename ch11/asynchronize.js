//callback
readTextFile("shopping_list.txt", (content) => {
  console.log(`Shopping List:\n${content}`);
});
// → Shopping List:

let fifteen = Promise.resolve(15);
fifteen.then((value) => console.log(`Got ${value}`));
// → Got 15

//promise resolve
function textFile(filename) {
  return new Promise((resolve) => {
    readTextFile(filename, (text) => resolve(text));
  });
}
textFile("plans.txt").then(console.log);

//then callback
function randomFile(listFile) {
  return textFile(listFile)
    .then((content) => content.trim().split("\n"))
    .then((ls) => ls[Math.floor(Math.random() * ls.length)])
    .then((filename) => textFile(filename));
}

function jsonFile(filename) {
  return textFile(filename).then(JSON.parse);
}
jsonFile("package.json").then(console.log);

//Failure
someAsyncFunction((error, value) => {
  if (error) handleError(error);
  else processValue(value);
});

function textFile(filename) {
  return new Promise((resolve, reject) => {
    readTextFile(filename, (text, error) => {
      if (error) reject(error);
      else resolve(text);
    });
  });
}

new Promise((_, reject) => reject(new Error("Fail")))
  .then((value) => console.log("Handler 1:", value))
  .catch((reason) => {
    console.log("Caught failure " + reason);
    return "nothing";
  })
  .then((value) => console.log("Handler 2:", value));
// → Caught failure Error: Fail
// → Handler 2: nothing

function withTimeout(promise, time) {
  return new Promise((resolve, reject) => {
    promise.then(resolve, reject);
    setTimeout(() => reject("Timed out"), time);
  });
}

function crackPasscode(networkID) {
  function nextDigit(code, digit) {
    let newCode = code + digit;
    return withTimeout(joinWifi(networkID, newCode), 50)
      .then(() => newCode)
      .catch((failure) => {
        if (failure == "Timed out") {
          return nextDigit(newCode, 0);
        } else if (digit < 9) {
          return nextDigit(code, digit + 1);
        } else {
          throw failure;
        }
      });
  }
  return nextDigit("", 0);
}

crackPasscode("HANGAR 2").then(console.log);
// → 555555

//We can rewrite crackPasscode like this:
async function crackPasscode(networkID) {
  for (let code = ""; ; ) {
    for (let digit = 0; ; digit++) {
      let newCode = code + digit;
      try {
        await withTimeout(joinWifi(networkID, newCode), 50);
        return newCode;
      } catch (failure) {
        if (failure == "Timed out") {
          code = newCode;
          break;
        } else if (digit == 9) {
          throw failure;
        }
      }
    }
  }
}
