// 백준 브론즈 2 단어의 개수 문제
// https://www.acmicpc.net/problem/1152

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input[0].trim().split(' ')

if (arr[0] === '') {
  console.log(0)
} else {
  console.log(arr.length)
}
