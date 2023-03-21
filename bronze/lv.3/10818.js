// 백준 브론즈 3 최소, 최대 문제
// https://www.acmicpc.net/problem/10818

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const length = Number(input[0])
const arr = input[1].split(' ').map((element) => Number(element))

const min = Math.min(...arr)
const max = Math.max(...arr)

console.log(min + ' ' + max)
