// 백준 실버 5 좌표 정렬하기 2 문제
// https://www.acmicpc.net/problem/11651

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const length = Number(input[0])
const result = []

for (let i = 1; i <= length; ++i) {
  const [x, y] = input[i].split(' ').map(Number)
  result.push([x, y])
}

result.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]))

let answer = ''

for (let i = 0; i < result.length; ++i) {
  answer += result[i][0] + ' ' + result[i][1] + '\n'
}

console.log(answer)
