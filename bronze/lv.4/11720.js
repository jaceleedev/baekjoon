// 백준 브론즈 4 숫자의 합 문제
// https://www.acmicpc.net/problem/11720

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const length = Number(input[0])
const sum = input[1]
  .split('')
  .map(Number)
  .reduce((acc, current) => acc + current)

console.log(sum)
