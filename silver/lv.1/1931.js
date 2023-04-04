// 백준 실버 1 회의실 배정 문제
// https://www.acmicpc.net/problem/1931

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const N = Number(input[0])
const records = []

for (let i = 1; i <= N; ++i) {
  const record = input[i].split(' ').map(Number)
  records.push(record)
}

records.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0]
  } else {
    return a[1] - b[1]
  }
})

let answer = 1
let current = 0

for (let i = 1; i < N; ++i) {
  if (records[current][1] <= records[i][0]) {
    current = i
    ++answer
  }
}

console.log(answer)
