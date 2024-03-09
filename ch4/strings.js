console.log("coconuts".slice(4, 7));
// → nut
console.log("coconut".indexOf("u"));
// → 5
console.log("one two three".indexOf("ee"));
// → 11
console.log(" okay \n ".trim());
// → okay
console.log(String(6).padStart(3, "0"));
// → 006

//split
let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);

//repeat strings
console.log("LA".repeat(3));
// → LALALA

let string = "abc";
console.log(string.length);
// → 3
console.log(string[1]);
// → b

function max(...numbers) {
    console.log(numbers);
  let result = -Infinity;
  for (let number of numbers) {
  if (number > result) result = number;
  }
  return result;
  }
  console.log(max(4, 1, 9, -2));
  // → 9



/*You can use a similar three-dot notation to call a function with an
array of arguments:
*/
let numbers = [5, 1, 7];
console.log(max(...numbers));
// → 7

let words2 = ["never","fully"];
console.log(["will",...words2,"understand"]);

let coordinates = {x:10,y:0};
console.log({...coordinates,y:5,z:1});

/*Optional property access*/
function city(object){
    return object.address?.city;
}

console.log({address:{city: "Toronto"}});
//Toronto
console.log(city({name: "Vera"}));

console.log("string".notAMethod?.());
// → undefined
console.log({}.arrayProp?.[0]);
// → undefined

/*Optional property access*/
function city(object){
    return object.address?.city;
}

console.log({address:{city: "Toronto"}});
//Toronto
console.log(city({name: "Vera"}));

let string1 = JSON.stringify({squirrel: false,
events: ["weekend"]});
console.log(string1);
// → {"squirrel":false,"events":["weekend"]}
console.log(JSON.parse(string1).events);
// → ["weekend"]


function range(start,end){
    //Check of start is greater than end
    if(start > end){
        return [];
    }
    //initialize an empty array to store the range of numbers
let result = [];
for(let i = start; i <= end; i++)
result.push(i)

//Return the array containing the range 0f numbers
return result;
}

//Exmaple usage;
const start = 1;
const end = 5;
const numbersInRange = range(start,end);
console.log(numbersInRange)
/**
 * 
 Write a range function that takes two arguments, start and end, and
returns an array containing all the numbers from start up to and including
end.
Next, write a sum function that takes an array of numbers and returns
the sum of these numbers. Run the example program and see whether
it does indeed return 55.
As a bonus assignment, modify your range function to take an optional
third argument that indicates the “step” value used when building
the array. If no step is given, the elements should go up by increments
of one, corresponding to the old behavior. The function call
range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure this also
works with negative step values so that range(5, 2, -1) produces [5,
4, 3, 2].
 */
function range(start, end, step = 1) {
    // Check if step is 0 or undefined
    if (step === 0 || typeof step !== 'number') {
      throw new Error('Step must be a non-zero number');
    }
  
    // Initialize an empty array to store the range of numbers
    const result = [];
  
    // Determine the direction of the range (increment or decrement)
    const direction = Math.sign(end - start);
  
    // Loop from start to end based on the direction and step
    for (let i = start; direction * i <= direction * end; i += step) {
      result.push(i);
    }
  
    // Return the array containing the range of numbers
    return result;
  }
  