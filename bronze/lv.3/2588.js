// 백준 브론즈 3 곱셈 문제
// https://www.acmicpc.net/problem/2588

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const a = Number(input[0])
const b = Number(input[1])

console.log(a * (b % 10))
console.log(a * (parseInt(b / 10) % 10))
console.log(a * parseInt(b / 100))
console.log(a * b)
