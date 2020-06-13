import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import homepage from '@/view/homepage/home.vue'
import declare from '@/view/Typescriptlearning/declare/index'
import typescript from '@/view/Typescriptlearning/router.vue'
import array from '@/view/array/index.vue'
import arrfunction from '@/view/array/function/function.vue'
import index from '@/view/homepage/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children: [
            {
              path: '/',
              redirect: '/array'
            },
            {
              path: '/typescript',
              name: 'typescript',
              component: typescript,
              children: [
                { path: '/', component: declare },
                {
                  path: '/declare',
                  name: 'declare',
                  component: declare
                }
              ]
            },
            {
              path: '/array',
              name: 'array',
              component: array,
              children: [
                { path: '/', component: arrfunction },
                {
                  path: '/function',
                  name: 'function',
                  component: arrfunction
                }
              ]
            },
            {
              path: '/event',
              component: () => import('@/view/event/event.vue')
            }
      ]
    }
    
  ]
})
