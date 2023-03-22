// 백준 브론즈 2 상수 문제
// https://www.acmicpc.net/problem/2908

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [a, b] = input[0].split(' ')

const reversedA = Number(a.split('').reverse().join(''))
const reversedB = Number(b.split('').reverse().join(''))

console.log(reversedA > reversedB ? reversedA : reversedB)
