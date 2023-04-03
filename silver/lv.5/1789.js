// 백준 실버 5 수들의 합 문제
// https://www.acmicpc.net/problem/1789

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const S = Number(input[0])

let sum = 0
let current = 0

while (true) {
  if (sum > S) {
    break
  }

  current += 1
  sum += current
}

console.log(current - 1)
