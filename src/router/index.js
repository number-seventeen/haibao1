import Vue from 'vue'
import Router from 'vue-router'
import Box from '../components/ShowBox/Box'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Box',
      component:Box
     
    }
    
  ]
})
