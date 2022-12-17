import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/rem' //rem setting

import '@/styles/index.less' // global css
// 引入模块后自动生效 桌面端适配 mouse转touch事件
import '@vant/touch-emulator'
import vant from 'vant'
import 'vant/lib/index.css'



const app = createApp(App)

app.use(store).use(router).mount('#app')
app.use(vant)

