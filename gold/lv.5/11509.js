// 백준 골드 5 풍선 맞추기 문제
// https://www.acmicpc.net/problem/11509

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const N = Number(input[0])
const balloons = input[1].split(' ').map(Number)

let answer = 0
// 높이: 풍선의 키-값 쌍을 갖는다.
const heightMap = new Map()

for (let i = 0; i < N; ++i) {
  const height = balloons[i]

  // heightMap에 현재 높이가 있다면
  if (heightMap.has(height)) {
    // 해당 높이의 풍선 개수를 1 감소시킨다.
    heightMap.set(height, heightMap.get(height) - 1)

    // 풍선 개수가 0이 되면 해당 높이를 삭제한다.
    if (heightMap.get(height) === 0) {
      heightMap.delete(height)
    }
  } else {
    // heightMap에 현재 높이가 없으면, 새로운 화살이 필요하다.
    ++answer
  }

  // 화살이 풍선을 터트리면, 높이가 1 줄어든 상태가 된다.
  if (!heightMap.has(height - 1)) {
    // 해당 높이에서 1을 뺀 값이 heightMap에 없으면 heightMap에 추가한다.
    heightMap.set(height - 1, 1)
  } else {
    // 해당 높이에서 1을 뺀 값이 heightMap에 있으면 풍선 개수를 1 증가한다
    heightMap.set(height - 1, heightMap.get(height - 1) + 1)
  }
}

console.log(answer)
