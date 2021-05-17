import Vue from 'vue'
import VueRouter from 'vue-router'

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      name: 'index'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home.vue'),
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('@/views/foundmusic/index.vue'),
        children: [
          {
            path: '/recommend',
            name: 'recommend',
            component: () => import('@/views/foundmusic/recommend.vue'),
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
