// 백준 실버 2 A -> B 문제
// https://www.acmicpc.net/problem/16953

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

let [A, B] = input[0].split(' ').map(Number)

let answer = 0
let isDividable = false

while (true) {
  if (B === A) {
    isDividable = true
    break
  } else if (B < A) {
    break
  }

  if (B % 2 === 0) {
    B = Math.floor(B / 2)
  } else if (B % 10 === 1) {
    B = Math.floor(B / 10)
  } else {
    break
  }

  ++answer
}

console.log(isDividable ? answer + 1 : -1)
