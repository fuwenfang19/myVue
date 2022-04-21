import { createApp } from 'vue'
import routes from './router'
import store from './store'
import App from './App'
import { createRouter, createWebHashHistory } from 'vue-router'
// import '../config/rem'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
