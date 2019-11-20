import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/views/Index'
import axios from 'axios'
Vue.use(Router)
Vue.use(ElementUI);
Vue.prototype.$http=axios;
export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    }
  ]
})
