import {createRouter, createWebHashHistory} from 'vue-router'
import Login from './Pages/login.vue'
import Register from './Pages/register.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/register', component: Register },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})