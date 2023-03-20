// 백준 브론즈 4 빠른 A+B 문제
// https://www.acmicpc.net/problem/15552

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const length = Number(input[0])
let result = ''

for (let i = 1; i <= length; ++i) {
  const [a, b] = input[i].split(' ')
  const sum = Number(a) + Number(b)
  result += sum + '\n'
}

console.log(result)
