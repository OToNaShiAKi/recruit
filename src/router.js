import Vue from 'vue'
import Router from 'vue-router'
import Pre from './views/Pre.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/pre',
      name: 'Pre',
      component: Pre
    },
    {
      path: '/',
      redirect: '/pre'
    }
  ]
})