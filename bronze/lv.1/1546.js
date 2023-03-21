// 백준 브론즈 1 평균 문제
// https://www.acmicpc.net/problem/1546

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const length = Number(input[0])
const arr = input[1].split(' ').map(Number)
const max = Math.max(...arr)

const newAvg =
  arr.reduce((acc, current) => {
    const newScore = (current / max) * 100

    return acc + newScore
  }, 0) / length

console.log(newAvg)
