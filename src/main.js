import Vue from 'vue'
import App from './App'
import './css/app.css'

Vue.config.productionTip = false
App.mpType = 'app'

import '../static/weui/weui.css'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    pages: [
      '^pages/index/index',
      'pages/button/button',
      'pages/list/list',
      'pages/input/input',
      'pages/slider/slider',
      'pages/uploader/uploader',

      'pages/article/article',
      'pages/badge/badge',
      'pages/flex/flex',
      'pages/footer/footer',
      'pages/gallery/gallery',
      'pages/grid/grid',
      'pages/icons/icons',
      'pages/loadmore/loadmore',
      'pages/panel/panel',
      'pages/preview/preview',
      'pages/progress/progress',
      'pages/swiper/swiper',

      'pages/actionsheet/actionsheet',
      'pages/dialog/dialog',
      'pages/msg/msg',
      'pages/msg-fail/msg-fail',
      'pages/msg-success/msg-success',
      'pages/picker/picker',
      'pages/mulLinkagePicker/mulLinkagePicker',
      'pages/toast/toast',
      'pages/navbar/navbar',
      'pages/tabbar/tabbar',

      'pages/searchbar/searchbar',

      'pages/test/test',
      'pages/componentsTest/componentsTest'

    ], // Will be filled in webpack
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '珠宝首饰',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#999999',
      selectedColor: '#04ad9c',
      backgroundColor: '#ffffff',
      borderStyle: 'white',
      list: [
        {
          pagePath: 'pages/index/index',
          text: '微信',
          iconPath: 'static/images/icon_nav_button.png',
          selectedIconPath: 'static/images/icon_nav_button.png'
        },
        {
          pagePath: 'pages/button/button',
          text: '通讯录',
          iconPath: 'static/images/icon_nav_cell.png',
          selectedIconPath: 'static/images/icon_nav_cell.png'
        },
        {
          pagePath: 'pages/input/input',
          text: '我的',
          iconPath: 'static/images/icon_nav_toast.png',
          selectedIconPath: 'static/images/icon_nav_toast.png'
        }
      ]
    }
  }
}
