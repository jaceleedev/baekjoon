// 백준 브론즈 2 나머지 문제
// https://www.acmicpc.net/problem/3052

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input.map((element) => Number(element) % 42)

const set = new Set(arr)

console.log(set.size)
