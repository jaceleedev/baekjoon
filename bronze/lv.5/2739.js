// 백준 브론즈 5 구구단 문제
// https://www.acmicpc.net/problem/2739

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const n = Number(input[0])

for (let i = 1; i <= 9; ++i) {
  console.log(`${n} * ${i} = ${n * i}`)
}
