// 백준 실버 5 수 정렬하기 2 문제
// https://www.acmicpc.net/problem/2751

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const length = Number(input[0])
const result = []

for (let i = 1; i <= length; ++i) {
  const num = Number(input[i])
  result.push(num)
}

result.sort((a, b) => a - b)

let answer = ''
result.forEach((el) => (answer += el + '\n'))

console.log(answer)
