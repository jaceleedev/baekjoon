// 백준 실버 2 좌표 압축 문제
// https://www.acmicpc.net/problem/18870

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const length = Number(input[0])
const arr = input[1].split(' ').map(Number)
const set = new Set(arr)
const pos = [...set]
pos.sort((a, b) => a - b)
const map = {}

pos.forEach((el, index) => {
  map[el] = index
})

let answer = ''

arr.forEach((el) => {
  answer += map[el] + ' '
})

console.log(answer)
