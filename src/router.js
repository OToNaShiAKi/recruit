import Vue from 'vue'
import Router from 'vue-router'
import Pre from './views/Pre.vue'
import Inquiry from './views/Inquiry.vue'
import Apply from './views/Apply.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/pre',
    name: 'Pre',
    component: Pre
  }, {
    path: '/inquiry',
    name: 'Inquiry',
    component: Inquiry
  }, {
    path: '/apply',
    name: 'Apply',
    component: Apply
  }, {
    path: '/',
    redirect: '/apply'
  }]
})