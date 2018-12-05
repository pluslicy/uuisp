import Vue from 'vue'
import Router from 'vue-router'
import Activity from '@/pages/Activity'
import ActivityContent from '@/pages/ActivityContent'
import Main from '@/pages/Main'
import Message from '@/pages/Message'
import MessageContent from '@/pages/MessageContent'
import Technology from '@/pages/Technology'
import TechnologyContent from '@/pages/TechnologyContent'
import ThinkTank from '@/pages/ThinkTank'
import ThinkTankContent from '@/pages/ThinkTankContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },{
      path: '/activity',
      name: 'Activity',
      component: Activity
    },{
      path: '/activity/content',
      name: 'ActivityContent',
      component: ActivityContent,
    },{
      path: '/message',
      name: 'Message',
      component: Message
    },{
      path: '/message/content',
      name: 'MessageContent',
      component: MessageContent,
    },{
      path: '/technology',
      name: 'Technology',
      component: Technology
    },{
      path: '/technology/content',
      name: 'TechnologyContent',
      component: TechnologyContent,
    },{
      path: '/thinkTank',
      name: 'ThinkTank',
      component: ThinkTank
    },{
      path: '/thinkTank/content',
      name: 'ThinkTankContent',
      component: ThinkTankContent,
    }
  ]
})
