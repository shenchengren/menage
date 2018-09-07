import Login from '@/pages/login/Login.vue';
import Home from '@/pages/index/Home.vue';
import AddUser from '@/pages/users/AddUser.vue'
import userinquire from '@/pages/users/Userinquire.vue'
import custormsData from '@/pages/custormsData/custorms-data.vue'
import systemLog from '@/pages/systemLog/system-log'
 const routers = [
    {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path : '/home',
        name : "Home",
        component:Home,
        children : [
            {path :'/user',name:'user',component : userinquire},
            {path :'/custorms-data',name:'custorms-data',component : custormsData},
            {path :'/system-log',name:'system-log',component : systemLog},
            {path : '/add',name: "AddUser",component: AddUser},
        ]

      },
      
];
export default routers;