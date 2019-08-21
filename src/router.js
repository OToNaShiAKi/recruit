import Vue from 'vue'
import Router from 'vue-router'
import Pre from './views/Pre.vue'

Vue.use(Router)

export default new Router({
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