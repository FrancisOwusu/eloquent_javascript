Question;
/*Write a loop that makes seven calls to console.log to output the following.

answer: 
let triangle = "";
for (let i = 0; i < 7; i++) {
  triangle += "#"; // Add '#' for each row
  console.log(triangle); // Output the triangle for each row
}

*/

/**
 * FizzBuzz
Write a program that uses console.log to print all the numbers from 1
to 100, with two exceptions. For numbers divisible by 3, print "Fizz"
instead of the number, and for numbers divisible by 5 (and not 3), print
"Buzz" instead.
When you have that working, modify your program to print "FizzBuzz
" for numbers that are divisible by both 3 and 5 (and still print "Fizz"
or "Buzz" for numbers divisible by only one of those).
(This is actually an interview question that has been

    Answer
*/
for (let number = 0; number <= 100; number = number + 1) {
  if (number % 3 == 0) console.log("Fizz");
  if (number % 5 == 0) console.log("Buzz");
  if (number % 3 == 0 && number % 5 == 0) console.log("FizzBuzz");
}

/* 
Chessboard
Write a program that creates a string that represents an 8×8 grid, using
newline characters to separate lines.
Answer

let size = 8; // size of the grid
let board = ""; // initialize an empty string for the chessboard
*/
for (let row = 0; row < size; row++) {
  for (let col = 0; col < size; col++) {
    // Check if the sum of row and col is even or odd to determine whether to add a space or a #
    if ((row + col) % 2 === 0) {
      board += " "; // add space for even positions
    } else {
      board += "#"; // add # for odd positions
    }
  }
  board += "\n"; // add newline character after each row
}

console.log(board); // Output the chessboard

function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == ch) {
        counted += 1;
      }
    }
    return counted;
  }
  
  function countBs(string) {
    return countChar(string, "B");
  }
  
  console.log(countBs("BBC"));
  // → 2
  console.log(countChar("kakkerlak", "k"));


  