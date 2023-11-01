import {createRouter, createWebHashHistory} from 'vue-router'
import Login from './Pages/login.vue'
import Register from './Pages/register.vue'
import Home from './Pages/home.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/register', component: Register },
  { path: '/home', component: Home}
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})