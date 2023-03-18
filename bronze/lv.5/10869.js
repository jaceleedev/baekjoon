// 백준 브론즈 5 A X B 문제
// https://www.acmicpc.net/problem/10869

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const line = input[0].split(' ')

const a = Number(line[0])
const b = Number(line[1])

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(parseInt(a / b))
console.log(a % b)
