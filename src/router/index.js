import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/Login.vue';
import Home from '@/pages/index/Home.vue';
import addUser from '@/pages/users/addUser.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path : '/home',
      name : "Home",
      component:Home,
    },
    {
      path : '/add',
      name : "addUser",
      component:addUser,
    },

  ]
})
