// 백준 브론즈 4 주사위 세개 문제
// https://www.acmicpc.net/problem/2480

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const line = input[0].split(' ')

const [a, b, c] = line

let prize = 0

if (a === b && b === c) {
  prize = 10000 + a * 1000
} else if (a !== b && b !== c && a !== c) {
  let max = Math.max(a, b, c)
  prize = max * 100
} else {
  if (a === b || a === c) {
    prize = 1000 + a * 100
  } else {
    prize = 1000 + b * 100
  }
}

console.log(prize)
