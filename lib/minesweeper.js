"use strict";

console.log("This is what an empty board would look like:");

var blankLine = '   |   |   ';
for (var i = 0; i < 3; i++) {
  console.log(blankLine);
}

console.log("This is what a board with a guess and a bomb on it would look like:");
var guessLine = '1  |   |   ';
var bombLine = '   | B |   ';

console.log(guessLine);
console.log(bombLine);
console.log(blankLine);