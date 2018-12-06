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
import Enterprise from '@/pages/Enterprise'
import Professor from '@/pages/Professor'
import RegionalCooperation from '@/pages/RegionalCooperation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },{
      // 活动
      path: '/activity',
      name: 'Activity',
      component: Activity
    },{
      path: '/activity/content',
      name: 'ActivityContent',
      component: ActivityContent,
    },{
      // 资讯
      path: '/message',
      name: 'Message',
      component: Message
    },{
      path: '/message/content',
      name: 'MessageContent',
      component: MessageContent,
    },{
      // 技术
      path: '/technology',
      name: 'Technology',
      component: Technology
    },{
      path: '/technology/content',
      name: 'TechnologyContent',
      component: TechnologyContent,
    },{
      // 智库
      path: '/thinkTank',
      name: 'ThinkTank',
      component: ThinkTank
    },{
      path: '/thinkTank/content',
      name: 'ThinkTankContent',
      component: ThinkTankContent,
    },{
      // 企业服务
      path: '/enterprise',
      name: 'Enterprise',
      component: Enterprise
    },{
      // 我是专家
      path: '/professor',
      name: 'Professor',
      component: Professor
    },{
      // 区域合作
      path: '/regional',
      name: 'RegionalCooperation',
      component: RegionalCooperation
    }
  ]
})
