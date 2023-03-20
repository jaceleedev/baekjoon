// 백준 브론즈 5 별 찍기 - 1 문제
// https://www.acmicpc.net/problem/2438

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const n = Number(input[0])
let result = ''

for (let row = 1; row <= n; ++row) {
  result += '*'.repeat(row)
  result += '\n'
}

console.log(result)
