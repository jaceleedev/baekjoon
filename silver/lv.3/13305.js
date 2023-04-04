// 백준 실버 3 주유소 문제
// https://www.acmicpc.net/problem/13305

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const N = Number(input[0])
const distances = input[1].split(' ').map(Number)
const prices = input[2].split(' ').map(Number)

let minPrice = prices[0]
for (let i = 0; i < N; ++i) {
  minPrice = Math.min(minPrice, prices[i])
  prices[i] = minPrice
}

let answer = BigInt(0)
for (let i = 0; i < N - 1; ++i) {
  answer += BigInt(prices[i]) * BigInt(distances[i])
}

console.log(String(answer))
