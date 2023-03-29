// 백준 브론즈 2 수 정렬하기 문제
// https://www.acmicpc.net/problem/2750

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const length = Number(input[0])
const answer = []

for (let i = 1; i <= length; ++i) {
  const num = Number(input[i])
  answer.push(num)
}

let result = ''
answer.sort((a, b) => a - b)
answer.forEach((el) => (result += el + '\n'))

console.log(result)
