import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/Hello'

Vue.use(Router)

// route-level code splitting
const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})

export default router