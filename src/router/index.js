import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import Layout from '@/components/Layout'
// import Icon from '@/components/Icon'
// import Radio from '@/components/Radio'
// import Select from '@/components/Select'
Vue.use(Router)
Vue.use(Vuex)
import VuexExample from '@/components/VuexExample'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VuexExample',
      component: VuexExample
    }
  ]
})
