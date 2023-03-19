// 백준 브론즈 5 시험 성적 문제
// https://www.acmicpc.net/problem/9498

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const score = Number(input[0])
let grade = ''

if (score >= 90) {
  grade = 'A'
} else if (score >= 80) {
  grade = 'B'
} else if (score >= 70) {
  grade = 'C'
} else if (score >= 60) {
  grade = 'D'
} else {
  grade = 'F'
}

console.log(grade)
