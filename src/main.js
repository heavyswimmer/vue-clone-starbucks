import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import cBtn from './components/layout/cSU_CommonBtn.vue'
import blackBg from './components/layout/cSU_BlackBg.vue'
import getPriceWithComma from './util.js'

axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.timeout = 100000
axios.defaults.baseURL = 'http://192.168.0.100:9090'

// 캐싱 방지
axios.defaults.headers.get['Cache-Control'] = 'no-cache'
axios.defaults.headers.get.Pragma = 'no-cache'

const app = createApp(App)
app.component('cBtn', cBtn)
app.component('blackBg', blackBg)

// axios를 global($axios)로 사용
app.config.globalProperties.$axios = axios
app.config.globalProperties.$getPriceWithComma = getPriceWithComma

app.use(store).use(router).mount('#app')
