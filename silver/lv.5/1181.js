// 백준 실버 5 단어 정렬 문제
// https://www.acmicpc.net/problem/1181

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const length = Number(input[0])
const wordSet = new Set()

for (let i = 1; i <= length; ++i) {
  const word = input[i]

  wordSet.add(word)
}

const result = [...wordSet]
result.sort((a, b) => {
  if (a.length === b.length) {
    if (a < b) {
      return -1
    } else if (a > b) {
      return 1
    } else {
      return 0
    }
  }

  return a.length - b.length
})

let answer = ''

for (const el of result) {
  answer += el + '\n'
}

console.log(answer)
