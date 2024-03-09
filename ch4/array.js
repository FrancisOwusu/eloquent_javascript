//array loops
for (let i = 0; i < JOURNAL.length; i++) {
  let entry = JOURNAL[i];
  // Do something with entry
}

function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}
console.log(journalEvents(JOURNAL));
// → ["carrot", "exercise", "weekend", "bread", …]

for (let event of journalEvents(JOURNAL)) {
    let correlation = phi(tableFor(event, JOURNAL));
    if (correlation > 0.1 || correlation < -0.1) {
    console.log(event + ":", correlation);
    }
    }
    // → weekend: 0.1371988681
    // → brushed teeth: -0.3805211953
    // → candy: 0.1296407447
    // → work: -0.1371988681
    // → spaghetti: 0.2425356250

    for (let entry of JOURNAL) {
        if (entry.events.includes("peanuts") &&
        !entry.events.includes("brushed teeth")) {
        entry.events.push("peanut teeth");
        }
        }
        console.log(phi(tableFor("peanut teeth", JOURNAL)));
        // → 1


        let todoList = [];
        function remember(task){
            todoList.push(task);
        }


        function getTask(){
            return todoList.shift();
        }

        function rememberUrgently(task){
            todoList.unshift(task);
        }

        /**), and when you’re ready to
do something, you call getTask() to get (and remove) the front item
from the queue. The rememberUrgently function also adds a task but
adds it to the front instead of the back of the queue.
*/

/**
 * To search for a specific value, arrays provide an indexOf method.
The method searches through the array from the start to the end and
returns the index at which the requested value was found—or -1 if it
wasn’t found.
 */
console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// → 3

/**Both indexOf and lastIndexOf take an optional second argument that
indicates where to start searching.
Another fundamental array method is slice, which takes start and
end indices and returns an array that has only the elements between
them. The start index is inclusive, the end index exclusive.
*/
console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4] */

/*The concat method can be used to append arrays together to create
a new array, similar to what the + operator does for strings.
*/
function remove(array, index) {
    return array.slice(0, index)
    .concat(array.slice(index + 1));
    }
    console.log(remove(["a", "b", "c", "d", "e"], 2));
    // → ["a", "b", "d", "e"]
