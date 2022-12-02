import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/rem' //rem setting

import '@/styles/index.less' // global css

createApp(App).use(store).use(router).mount('#app')
