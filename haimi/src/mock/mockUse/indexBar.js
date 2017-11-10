import mock from 'mockjs'
let IndexBar = []
for (let i = 0; i < 11; i++) {
  IndexBar.push({
    type: i === 0 ? 1 : 2,
    id: i,
    name: mock.Random.cword(2)
  })
}
export default IndexBar
