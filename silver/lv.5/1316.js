// 백준 실버 5 그룹 단어 체커 문제
// https://www.acmicpc.net/problem/1316

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const length = Number(input[0])
let answer = 0

for (let i = 1; i <= length; ++i) {
  const word = input[i]
  const set = new Set()

  let isGroupWord = true
  for (let j = 0; j < word.length; ++j) {
    const char = word[j]

    if (set.has(char) && word[j - 1] !== char) {
      isGroupWord = false
      break
    }

    set.add(char)
  }

  if (isGroupWord) {
    ++answer
  }
}

console.log(answer)
