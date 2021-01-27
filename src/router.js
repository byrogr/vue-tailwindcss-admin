import { createWebHistory, createRouter } from 'vue-router'
import Dashboard from './pages/Dashboard.vue'
import Employees from './pages/Employees.vue'

const routes = [
  {
    name: 'dashboard',
    path: '/',
    component: Dashboard
  },
  {
    name: 'employee',
    path: '/employees',
    component: Employees
  }
]

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  routes
})

export default router
