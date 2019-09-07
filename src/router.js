import Vue from 'vue'
import Router from 'vue-router'
import Pre from './views/Pre'
import Inquiry from './views/Inquiry'
import Apply from './views/Apply'
import Minist from './views/Minist'
import Test from './views/Test'

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
    path: '/test',
    name: 'Test',
    component: Test
  }, {
    path: '/minist',
    name: 'Minist',
    component: Minist
  }, {
    path: '/',
    redirect: '/apply'
  }]
})