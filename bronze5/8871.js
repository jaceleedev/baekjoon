// Zadanie próbne 2 (8871)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

console.log(`${(n + 1) * 2} ${(n + 1) * 3}`);
