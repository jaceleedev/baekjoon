// 백준 실버 5 K번째 수 문제
// https://www.acmicpc.net/problem/11004

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [length, k] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number)
arr.sort((a, b) => a - b)

console.log(arr[k - 1])
