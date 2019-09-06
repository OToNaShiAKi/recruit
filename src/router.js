import Vue from 'vue'
import Router from 'vue-router'
import Pre from './views/Pre'
import Inquiry from './views/Inquiry'
import Apply from './views/Apply'
import Plus from './views/Plus'

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
    path: '/plus',
    name: 'Plus',
    component: Plus
  }, {
    path: '/',
    redirect: '/apply'
  }]
})