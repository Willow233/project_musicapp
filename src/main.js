import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/rem' //rem setting

import '@/styles/index.less' // global css
import vant from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)

app.use(store).use(router).mount('#app')
app.use(vant)

