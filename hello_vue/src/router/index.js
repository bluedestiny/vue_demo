import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import dialog from '@/components/dialogComponent'
import commentList from '@/components/commentListComponent';
import tooltip from '@/components/tooltipComponent';
import search from "../components/searchComponent";
import select from "../components/selectComponent";
import carousel from '@/components/carouselComponent';
import layout from '@/components/layoutComponent';
import icon from '@/components/iconComponent';
import button from '@/components/buttonComponent'
import two from "../components/brotherTwoComponent";
import login from '@/page/login'
import userList from '@/page/userList';
import nav from '@/components/navMenuComponent';
import testNavComponent from "../components/testNavComponent";
import tab from '@/components/tabComponent';
import nextStep from "../components/nextStepComponent";
import drawer from '../components/drawerComponent';
import tableComponent from "../components/testTableComponent";
import treeComponent from "../components/treeComponent";
import child1 from '../components/child1Component';
import slotComponent from "../components/slotComponent";
import testSlotComponent from "../components/testSlotComponent";
import axiosTestComponent from "../components/axiosTestComponent";
import chartComponent from "../components/chartComponent";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: HelloWorld,
      children: [
        {
          path: 'child1/:id',
          component: child1,
          meta: {
            title: '子页面1'
          }
        }
      ]
    },
    {
      path: '/tree',
      name: 'tree',
      component: treeComponent,
      meta : {
        title: '树形组件'
      }
    },
    {
      path: '/chart',
      name: 'chart',
      component: chartComponent
    },
    {
      path: '/testAxios',
      name: 'testAxios',
      component: axiosTestComponent,
      meta: {
        title: '测试请求'
      }
    },
    {
      path: '/slot',
      name: 'slot',
      component: testSlotComponent,
      meta: {
        title: '插槽'
      }
    },
    {
      path: '/table',
      name: 'table',
      component: tableComponent,
      meta: {
        title: '表格组件'
      }
    },
    {
      path: '/next',
      name: 'next',
      component: nextStep,
      meta: {
        title: '下一步组件'
      }

    },
    {
      path: '/nav',
      name: 'nav',
      component: testNavComponent,
      meta: {
        title: '导航'
      }
    },
    {
      path: '/tab',
      name: 'tab',
      component: tab,
      meta: {
        title: '切换选项卡'
      }
    },
    {
      path: '/',
      name: 'login',
      component: login,
      meta: {
        title: '登录页面'
      }
    },
    {
      path: '/userList',
      name: 'userList',
      component: userList,
      meta: {
        title: '用户列表'
      }
    },
    {
      path: '/testDialog',
      name: 'testDialog',
      component: dialog,
      meta: {
        title: '弹出对话框'
      }
    },
    {
      path: '/comment',
      name: 'comment',
      component: commentList,
      meta: {
        title: '评论列表'
      }
    },
    {
      path: '/drawer',
      name: 'drawer',
      component: drawer,
      meta: {
        title: '抽屉'
      }
    },
    {
      path: '/tooltip/:userId',
      name: 'tooltip',
      component: tooltip,
      meta: {
        title: '提示'
      }
    },
    {
      path: '/search',
      name: 'search',
      component: search,
      meta: {
        title: '搜索框'
      }
    },
    {
      path: '/select',
      name: 'select',
      component: select,
      meta: {
        title: '下拉选择框'
      }
    },
    {
      path: '/carousel',
      name: 'carousel',
      component: carousel,
      meta: {
        title: '轮播图'
      }
    },
    {
      path: '/layout',
      name: 'layout',
      component: layout,
      meta: {
        title: '布局'
      }
    },
    {
      path: '/icon',
      name: 'icon',
      component: icon,
      meta: {
        title: '图标'
      }
    },
    {
      path: '/button',
      name: 'button',
      component: button,
      meta: {
        title: '按钮'
      }
    },
    {
      path: '/two',
      name: 'two',
      component: two,
      meta: {
        title: 'two'
      }
    }
  ]
})
