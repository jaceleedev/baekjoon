// 백준 실버 1 신입 사원 문제
// https://www.acmicpc.net/problem/1946

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const T = Number(input[0])
let line = 1

for (let t = 0; t < T; ++t) {
  let N = Number(input[line])
  const result = []

  for (let i = line + 1; i <= line + N; ++i) {
    const scores = input[i].split(' ').map(Number)
    result.push(scores)
  }

  result.sort((a, b) => a[0] - b[0])

  let answer = 0
  let minValue = N + 1

  for (const [x, y] of result) {
    if (y < minValue) {
      minValue = y
      ++answer
    }
  }

  console.log(answer)
  line += N + 1
}
