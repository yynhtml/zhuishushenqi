import Vue from 'vue'
import Router from 'vue-router'
import HelloFromVux from '@/components/HelloFromVux'
import Classify from '@/components/Classify'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloFromVux',
      component: HelloFromVux
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify
    }
  ]
})
