import mock from 'mockjs'
let HotBanner = []
for (let i = 0; i < 4; i++) {
  HotBanner.push({
    img: mock.Random.dataImage('320x167')
  })
}
export default HotBanner
