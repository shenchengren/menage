import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from './router'
import axios from 'axios'
import state from '@/store/index'

Vue.use(VueRouter);

const RouterConfig = {
  routes : routers//路由路径
}
//创建 router 实例，然后传 `routes` 配置
export const router =  new VueRouter(RouterConfig);//创建一个实例化的路由

//路由守卫 不明觉厉
router.beforeEach((to,from,next) => {
  axios.post('http://39.106.54.6:8089/api/sign').then(respose => {
    console.log(respose)
    let res = respose.data;
    if(res.status == 0){
      if(to.name !== 'Login'){
        next({path : '/login'})
      }else{
        next();
      }
    }else{
      if(to.name === 'Login'){
        next({name : 'Home'})
      }else{
        if(res.limits === 0){
          state.limits = 0;
          next()
        }else{
          state.limits = 1;
          next()
        }
      }
    }
  },(err) => {
    console.log(err)
  })
})

