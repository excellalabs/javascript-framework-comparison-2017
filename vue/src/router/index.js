import Vue from 'vue'
import Router from 'vue-router'
import Messages from '@/components/Messages'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Messages',
      component: Messages
    }
  ]
})
