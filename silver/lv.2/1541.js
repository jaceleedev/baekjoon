// 백준 실버 2 잃어버린 괄호 문제
// https://www.acmicpc.net/problem/1541

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const arr = input[0].split('-')
let answer = 0

for (let i = 0; i < arr.length; ++i) {
  const current = arr[i]
    .split('+')
    .map(Number)
    .reduce((acc, cur) => acc + cur)

  if (i === 0) {
    answer += current
  } else {
    answer -= current
  }
}

console.log(answer)
