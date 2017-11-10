import mock from 'mockjs'
let product = []
for (let i = 0; i < 600; i++) {
  product.push({
    id: i,
    img: mock.Random.dataImage('155x155'),
    title: mock.Random.ctitle(),
    type: mock.Random.integer(0, 9),
    price: mock.Random.float(60, 10000, 2, 2)
  })
}
export default product
