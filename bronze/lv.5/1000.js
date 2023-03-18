// 백준 브론즈 5 A + B 문제
// https://www.acmicpc.net/problem/1000

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', function (line) {
  const inputs = line.split(' ')

  console.log(Number(inputs[0]) + Number(inputs[1]))

  rl.close()
}).on('close', function () {
  process.exit()
})
