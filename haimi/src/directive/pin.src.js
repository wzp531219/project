import utils from '@/utils/util.js'
export default {
  bind () {},
  inserted (el, binding) {
    const initOffset = {
      top: el.offsetTop
    }
    console.log(initOffset)
    document.addEventListener('scroll', function () {
      let scrollTop = window.scrollY
      if (scrollTop >= initOffset.top) {
        utils.css(el, {
          ' width': '100%',
          'position': 'fixed',
          'top': binding.value
        })
      } else {
        utils.css(el, {
          'position': 'relative',
          'top': 0
        })
      }
    }, false)
  },
  update () {},
  componentUpdated () {},
  unbind () {}
}
