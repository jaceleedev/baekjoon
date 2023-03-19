// 백준 브론즈 3 알람 시계 문제
// https://www.acmicpc.net/problem/2884

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const line = input[0].split(' ')

let h = Number(line[0])
let m = Number(line[1])

if (m < 45) {
  h -= 1
  m = m + 60 - 45

  if (h < 0) {
    h += 24
  }
} else {
  m -= 45
}

console.log(h + ' ' + m)
