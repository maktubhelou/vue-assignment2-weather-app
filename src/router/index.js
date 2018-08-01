import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import About from '@/pages/About'
import City from '@/pages/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'About',
      component: About
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/city/:cityName',
      name: 'City',
      component: City
    }
  ]
})
