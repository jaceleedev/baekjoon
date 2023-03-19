// 백준 브론즈 3 오븐 시계 문제
// https://www.acmicpc.net/problem/2525

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const firstLine = input[0].split(' ')
const secondLine = input[1]

const startHour = Number(firstLine[0])
const startMin = Number(firstLine[1])
const neededMin = Number(secondLine)

const minToHour = parseInt((startMin + neededMin) / 60)
const remainderMin = (startMin + neededMin) % 60

const hour = (startHour + minToHour) % 24
const min = remainderMin

console.log(hour + ' ' + min)
