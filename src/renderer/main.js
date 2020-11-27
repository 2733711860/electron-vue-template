import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import './assets/css/common.css';
import 'swiper/dist/css/swiper.css';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* 
 屏幕适配
 */
var devInnerHeight = 1080.0; // 开发时的InnerHeight
var devDevicePixelRatio = 1.0;// 开发时的devicepixelratio
var devScaleFactor = 1.3; // 开发时的ScaleFactor
var scaleFactor = require('electron').screen.getPrimaryDisplay().scaleFactor;
var zoomFactor = (window.innerHeight / devInnerHeight) * (window.devicePixelRatio / devDevicePixelRatio) * (devScaleFactor / scaleFactor);
require('electron').webFrame.setZoomFactor(zoomFactor);


/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
