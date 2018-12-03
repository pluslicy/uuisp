import Vue from 'vue'
import Router from 'vue-router'
import Activity from '@/pages/Activity'
import Main from '@/pages/Main'
import Message from '@/pages/Message'
import Technology from '@/pages/Technology'
import ThinkTank from '@/pages/ThinkTank'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/activity',
      name: 'Activity',
      component: Activity
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/technology',
      name: 'Technology',
      component: Technology
    },
    {
      path: '/thinkTank',
      name: 'ThinkTank',
      component: ThinkTank
    }
  ]
})
