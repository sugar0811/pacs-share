import Vue from 'vue'
import Router from 'vue-router'
import PacsLogin from '@/components/PacsLogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PacsLogin',
      component: PacsLogin
    },
    {
      path: '/diseaseDetail',
      name: 'DiseaseDetail',
      component: (resolve) => require(['@/components/DiseaseDetail'], resolve),
      meta: {
        title: '病程记录'
      }
    }
  ]
})
