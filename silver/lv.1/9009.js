// 백준 실버 1 피보나치 문제
// https://www.acmicpc.net/problem/9009

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const T = Number(input[0])

const fibSequence = generateFibonacciSequence(1_000_000_000)

let answer = ''
for (let i = 1; i <= T; ++i) {
  const n = Number(input[i])

  const result = findMinumumFibonacciSum(n, fibSequence)

  answer += result.join(' ') + '\n'
}

console.log(answer)

function generateFibonacciSequence(limit) {
  const sequence = [0, 1]

  while (true) {
    if (sequence[sequence.length - 1] > limit) {
      break
    }

    const fibo = sequence[sequence.length - 1] + sequence[sequence.length - 2]

    sequence.push(fibo)
  }

  return sequence
}

function findMinumumFibonacciSum(n, fibSequence) {
  const result = []

  for (let i = fibSequence.length - 1; i >= 0; --i) {
    if (fibSequence[i] <= n) {
      n -= fibSequence[i]

      result.push(fibSequence[i])
    }

    if (n === 0) {
      break
    }
  }

  return result.reverse()
}
