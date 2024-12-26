import { createApp } from 'vue'
// import './style.css'
import router from './router/index'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createPinia } from 'pinia'
// createApp(App).mount('#app')
const app=createApp(App)
const pinia=createPinia()
app.use(router).use(ElementPlus).use(pinia).mount('#app')
//全局注册icon图标
for(const [key,component] of Object.entries(ElementPlusIconsVue)){
    app.component(key,component);
}

