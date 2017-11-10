import axios from '../utils/http'
import MockAdapter from 'axios-mock-adapter'
import IndexBar from './mockUse/indexBar'
import HotBanner from './mockUse/hotbanner'
import ProductData from './mockUse/ProductData'
var mock = new MockAdapter(axios, { delayResponse: 1000 })
mock.onGet('/mockUse/indexBar').reply(config => {
  console.log(config)
  return [200, IndexBar]
})
mock.onGet('/mockUse/hotbanner').reply(config => {
  return [200, HotBanner]
})
mock.onGet('/mockUse/ProductData').reply(config => {
  return [200, ProductData]
})
