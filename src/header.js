// import _ from 'lodash'
function Header() {
  var dom = document.getElementById('root')
  var header = document.createElement('div')
  header.innerHTML = 'hello header'
  dom.append(header)
}

export default Header