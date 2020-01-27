import { isNumber, isNull } from 'lodash'
// import _ from 'lodash'
function add (a, b) {
  return isNumber(a) ? (a + b) : (a - b)
} 

// var element = document.createElement('div')
// element.innerHTML = _.join(['foo', 'bar'], '-')
// document.body.appendChild(element)

// function getComponent() {
//   return import(/* webpackChunkName:'lodash' */ 'lodash').then(({ default: _ }) => {
//     var element = document.createElement('div')
//     element.innerHTML = _.join(['foo', 'bar'], '-')
//     return element
//   })
// }

// getComponent().then(element => {
//   document.body.appendChild(element)
// })

import test from './test'
console.log(test.name)