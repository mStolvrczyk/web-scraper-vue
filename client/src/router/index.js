import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Database from '../views/Database.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/database',
    name: 'Database',
    component: Database
  }
]

const router = new VueRouter({
  routes
})

export default router
