let school = {
  students: 25,
  departments: ["Accounts", "Science", "Visual"],
};

console.log(Object.keys({ x: 0, y: 0, z: 2 }));
// → ["x", "y", "z"]

//find the keys in the object

console.log(Object.keys(school));
console.log(school);
console.log(school.students);
console.log(school.departments["0"]);
delete school.students;

console.log("departments" in school);

//use Object.assign function that copies all properties from one object into another:
let objectA = { a: 1, b: 2 };

let objectB = Object.assign(objectA, { c: 3, d: 4 });
console.log(objectB);
//object uses {} and [] for array

let journal = [];
function addEntry(events, squirrel) {
  journal.push({ events, squirrel });
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);

addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);
/**
   * To extract a two-by-two table for a specific event from the journal,
we must loop over all the entries and tally how many times the event
occurs in relation to squirrel transformations:
   */
let journal1 = [
  {
    events: ["work", "touched tree", "pizza", "running", "television"],
    squirrel: false,
  },
  {
    events: [
      "work",
      "ice cream",
      "cauliflower",
      "lasagna",
      "touched tree",
      "brushed teeth",
    ],
    squirrel: false,
  },
  {
    events: ["weekend", "cycling", "break", "peanuts", "beer"],
    squirrel: true,
  },
  /* and so on... */
];
function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.lengt; i++) {
    let entry = journal[i],
      index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
}

console.log(tableFor("pizza", journal1));

//conpute correlation
/**
 * φ =n11n00 − √ n10n01/n1•n0•n•1n•0
 * @param {*} table
 * @returns
 */
function phi(table) {
  return (
    (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt(
      table[2] +
        table[3] *
          (table[0] * table[1]) *
          (table[1] + table[3]) *
          (table[0] + table[2])
    )
  );
}
console.log(phi([76, 9, 4, 1]));
// → 0.068599434
