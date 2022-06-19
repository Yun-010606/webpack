import {marquee} from './marquee.js'
import {nav} from './nav.js'
marquee()
nav()
// import './styles/index.css'
import './styles/index.less'
import './styles/index.css'
import gifSrc from './assets/1.gif'
import pngSrc from './assets/logo_small.png'

// 创建图片节点
const gif = document.createElement('img')
const png = document.createElement('img')

// 给src赋值
gif.src = gifSrc
png.src = pngSrc

// 插入节点
document.body.appendChild(gif)
document.body.appendChild(png)

import './assets/fonts/iconfont.css'
import './styles/style.css'

const fnn = () => {
    console.log('你好');
}
console.log(fnn);
import App from './app.vue'