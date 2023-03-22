// 백준 브론즈 2 문자열 반복 문제
// https://www.acmicpc.net/problem/2675

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const length = Number(input[0])

for (let i = 1; i <= length; ++i) {
  const [repeat, str] = input[i].split(' ')
  const repeatNum = Number(repeat)
  let answer = ''

  for (let j = 0; j < str.length; ++j) {
    answer += str[j].repeat(repeatNum)
  }

  console.log(answer)
}
