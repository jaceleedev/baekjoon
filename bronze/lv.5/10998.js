// 백준 브론즈 5 A X B 문제
// https://www.acmicpc.net/problem/10998

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const line = input[0].split(' ')

console.log(Number(line[0]) * Number(line[1]))
