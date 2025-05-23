import HomePage from './components/Home.vue';
import SignUp from './components/SignUp.vue';
import LoginPage from './components/Login.vue';
import UpdateR from './components/Update.vue';
import AddR from './components/Add.vue';
import {createRouter, createWebHistory} from 'vue-router';

const routes = [
  {
    name: 'HomePage',
    component:HomePage,
    path:'/',
  },
  {
    name: 'SignUp',
    component:SignUp,
    path:'/sign-up',
  },
  {
    name: 'LoginPage',
    component:LoginPage,
    path:'/login',
  },
  {
    name: 'UpdateR',
    component:UpdateR,
    path:"/update/:id",
  },
  {
    name: 'AddR',
    component:AddR,
    path:'/add',
  },


];

const router = createRouter({
  history : createWebHistory(),
  routes,

});

export default router;
