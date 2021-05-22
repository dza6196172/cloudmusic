import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      name: 'recommend'
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
            meta:{
              keepalive:true
            }
          },
          {
            path: '/songlist',
            name: 'songlist',
            component: () => import('@/views/foundmusic/songlist.vue'),
            meta:{
              keepalive:true
            }
          },
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
