// 백준 실버 4 설탕 배달 문제
// https://www.acmicpc.net/problem/2839

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const N = Number(input[0])

let answer = 0
let total = N
let isDividable = false

while (true) {
  if (total < 0) {
    break
  }

  if (total === 0 || total % 5 === 0) {
    answer += Math.floor(total / 5)
    isDividable = true
    break
  }

  total -= 3
  ++answer
}

console.log(isDividable ? answer : -1)
