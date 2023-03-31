// 백준 실버 5 나이순 정렬 문제
// https://www.acmicpc.net/problem/10814

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const length = Number(input[0])
const result = []

for (let i = 1; i <= length; ++i) {
  const el = input[i].split(' ')
  const age = Number(el[0])
  const name = el[1]
  const index = i

  const person = { name, age, index }

  result.push(person)
}

result.sort((a, b) => {
  if (a.age === b.age) {
    return a.index - b.index
  }

  return a.age - b.age
})

let answer = ''

for (const person of result) {
  answer += person.age + ' ' + person.name + '\n'
}

console.log(answer)
