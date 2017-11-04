console.log("This is what an empty board would look like:");

const blankLine = '   |   |   ';
for (let i = 0; i < 3; i++) {
  console.log(blankLine);  
}

console.log("This is what a board with a guess and a bomb on it would look like:");
const guessLine = '1  |   |   ';
const bombLine = '   | B |   ';

console.log(guessLine); 
console.log(bombLine); 
console.log(blankLine); 