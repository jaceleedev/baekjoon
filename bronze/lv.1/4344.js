// 백준 브론즈 1 평균은 넘겠지 문제
// https://www.acmicpc.net/problem/4344

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const length = Number(input[0])
let answer = ''

for (let i = 1; i < length + 1; ++i) {
  const arr = input[i].split(' ').map(Number)
  const totalNumber = arr[0]
  const totalScore = arr.reduce((acc, current) => acc + current) - totalNumber
  const averageScore = totalScore / totalNumber
  let countOverAvg = 0
  for (let i = 1; i <= totalNumber; ++i) {
    if (arr[i] > averageScore) {
      ++countOverAvg
    }
  }
  const rate = ((countOverAvg / totalNumber) * 100).toFixed(3)

  answer = answer + `${rate}%\n`
}

console.log(answer)
