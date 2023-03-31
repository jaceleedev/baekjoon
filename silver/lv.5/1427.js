// 백준 실버 5 소트인사이드 문제
// https://www.acmicpc.net/problem/1427

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const n = input[0].split('').map(Number)

n.sort((a, b) => b - a)

console.log(n.join(''))
