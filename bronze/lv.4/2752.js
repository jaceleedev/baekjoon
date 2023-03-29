// 백준 브론즈 4 세수정렬 문제
// https://www.acmicpc.net/problem/2752

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input[0].split(' ').map(Number)

arr.sort((a, b) => a - b)

console.log(arr[0] + ' ' + arr[1] + ' ' + arr[2])
