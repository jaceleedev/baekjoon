// 백준 브론즈 5 합 문제
// https://www.acmicpc.net/problem/8393

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const n = Number(input[0])

const sum = (n * (n + 1)) / 2

console.log(sum)
