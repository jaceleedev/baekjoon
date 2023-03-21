// 백준 브론즈 3 최댓값 문제
// https://www.acmicpc.net/problem/2562

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const arr = input.map(Number)

let max = -1
let maxIndex = -1

arr.forEach((num, index) => {
  if (num > max) {
    max = num
    maxIndex = index
  }
})

console.log(max + '\n' + (maxIndex + 1))
