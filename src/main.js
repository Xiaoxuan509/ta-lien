import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 1. 引入你在 router/index.js 定義好的路由設定

const app = createApp(App)

app.use(router)            // 2. 告訴 Vue 實例要使用這個路由插件

app.mount('#app')          // 3. 最後才掛載到 HTML