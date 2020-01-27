function getComponent () {
  return import(/* webpackChunkName:'lodash' */ 'lodash').then(({ default: _ }) => {
    console.log(_)
    const element = document.createElement('div')
    element.innerHTML = _.join(['foo', 'bar'], '--')
    return element
  })
}

document.addEventListener('click', () => {
  getComponent().then(element => {
    document.body.appendChild(element)
  })
})
