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
import button from '@/components/buttonComponent';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/testDialog',
      name: 'testDialog',
      component: dialog
    },
    {
      path: '/comment',
      name: 'comment',
      component: commentList
    },
    {
      path: '/tooltip',
      name: 'tooltip',
      component: tooltip
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/select',
      name: 'select',
      component: select
    },
    {
      path: '/carousel',
      name: 'carousel',
      component: carousel
    },
    {
      path: '/layout',
      name: 'layout',
      component: layout
    },
    {
      path: '/icon',
      name: 'icon',
      component: icon
    },
    {
      path: '/button',
      name: 'button',
      component: button
    }
  ]
})
