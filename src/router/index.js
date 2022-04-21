// import App from '../App'
import home from '../components/home.vue'

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: home
  }
]
export default routes
