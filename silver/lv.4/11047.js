// 백준 실버 4 동전 0 문제
// https://www.acmicpc.net/problem/11047

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [N, K] = input[0].split(' ').map(Number)
const coins = []

for (let i = 1; i <= N; ++i) {
  const coin = Number(input[i])

  coins.push(coin)
}

let left = K
let answer = 0

for (let i = coins.length - 1; i >= 0; --i) {
  const quotient = Math.floor(left / coins[i])

  if (quotient !== 0) {
    answer += quotient
    left -= quotient * coins[i]
  }
}

console.log(answer)
