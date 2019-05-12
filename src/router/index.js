/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import collections from '@/components/collections/collections'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'login',
    component: login
  }, {
    path: '/collections',
    name: 'collections',
    component: collections
  }]
})