import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/detail',
    name: 'Project',
    component: () => import(/* webpackChunkName: "project" */ '../views/Project.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
