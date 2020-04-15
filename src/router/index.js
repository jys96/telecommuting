import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home'

Vue.use(Router)

export default new Router({
  routes:[
    {
      path: '/',
      name: 'Main',
      component: Home
    },
    {
      path: '/Main',
      name: 'Main',
      component: Home
    },
    {
      path: '/why',
      name: 'Main',
      component: Home
    },
    {
      path: '/Installation',
      name: 'Main',
      component: Home
    },
    {
      path: '/Video',
      name: 'Main',
      component: Home
    },
    {
      path: '/Configuration',
      name: 'Main',
      component: Home
    },
    {
      path: '/Buy',
      name: 'Main',
      component: Home
    },
  ]
})