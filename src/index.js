// import './style.css'

// var btn = document.createElement('button')
// btn.innerHTML = 'click'
// document.body.appendChild(btn)
// btn.onclick = function () {
//   var div = document.createElement('div')
//   div.innerHTML = 'item'
//   document.body.appendChild(div)
// }
// import counter from './counter'
// import number from './number'
// counter()
// number()
// console.log(1)
// console.log(module)
// if (module.hot) {
//   module.hot.accept('./number', () => {
//     document.body.removeChild(document.getElementById('number'))
//     number()
//    })
// }

import '@babel/polyfill'
const arr = [
  new Promise(() => {}),
  new Promise(() => {}),
]

arr.map(item => {
  console.log(item)
})