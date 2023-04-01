// 백준 실버 4 ATM 문제
// https://www.acmicpc.net/problem/11399

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const N = Number(input[0])
const arr = input[1].split(' ').map(Number)
arr.sort((a, b) => a - b)

let answer = 0
let count = N

for (let i = 0; i < N; ++i) {
  answer += arr[i] * count
  --count
}

console.log(answer)
