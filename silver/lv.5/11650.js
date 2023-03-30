// 백준 실버 5 좌표 정렬하기 문제
// https://www.acmicpc.net/problem/11650

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const length = Number(input[0])
const result = []

for (let i = 1; i <= length; ++i) {
  const [x, y] = input[i].split(' ').map(Number)

  const pos = { x, y }

  result.push(pos)
}

result.sort((a, b) => (a.x === b.x ? a.y - b.y : a.x - b.x))

let answer = ''

for (let i = 0; i < result.length; ++i) {
  answer += result[i].x + ' ' + result[i].y + '\n'
}

console.log(answer)
