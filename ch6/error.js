// class InputError extends Error{
//     function promptDirection(question) {
//         let result = prompt(question);
//         if(result.toLowerCase() == "left") return "L";
//         if(result.toLowerCase() == "right") return "R";
//         throw new InputError("Invalid direction: " + result);
//     }
// }

for (;;) {
  try {
    let dir = promptDirection("Where?");
    console.log("You chose ", dir);
    break;
  } catch (e) {
    if (e instanceof InputError) {
      console.log("Not a valid direction. Try again.");
    } else {
      throw e;
    }
  }
}

function firstElement(array) {
  if (array.length == 0) {
  throw new Error("firstElement called with []");
}
return array[0];
}

const box = new class{
    locked = true;
    #content = [];
    unlock(){ this.locked = false;}
    locked(){
        this.locked = true;
    
    }
get content(){
    if(this.locked) throw new Error("Locked!");
    return this.#content;
}}

