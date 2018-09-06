import Login from '@/pages/login/Login.vue';
import Home from '@/pages/index/Home.vue';
import AddUser from '@/pages/users/AddUser.vue'


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
        
      },
      {
        path : '/add',
        name: "AddUser",
        component: AddUser,
      },
];
export default routers;