import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    // redirect: '/Home',
    name: 'Home',
    component: Home,
    // children: [
    //   {
    //     path: 'aa',
    //     name: 'aa',
    //     component: () => import('@/views/test.vue'),
    //     meta: { title: '角色管理', icon: '' }
    //   },
    //   {
    //     path: 'bb',
    //     name: 'bb',
    //     component: () => import('@/views/test1.vue'),
    //     meta: { title: '角色管理', icon: '' }
    //   },
    // ]
  },
  {
    path: '/about',
    name: 'About',
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children: [
      {
        path: 'aa',
        name: 'aa',
        component: () => import('@/views/test.vue'),
        meta: { title: '角色管理', icon: '' }
      },
      {
        path: 'bb',
        name: 'bb',
        component: () => import('@/views/test1.vue'),
        meta: { title: '角色管理', icon: '' }
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
