// import Header from './header'
// import Sidebar from './sidebar'
// import Content from './content'
// import share from './share.png'

// console.log(share)

// new Header()
// new Sidebar()
// new Content()
import './index.scss'
import avatar from './share.png'
const img = new Image()
img.classList.add('avatar')
img.src = avatar
const root = document.getElementById('root')
root.append(img)