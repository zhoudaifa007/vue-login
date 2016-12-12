import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import App from './App'
import Home from './components/home'
import Login from './components/login'
import Reg from './components/reg'
import Person from './components/person'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/templatemo.css'
import './assets/css/font-awesome.min.css'
import store from './store/index'

const routes = [{
  path : '/',
  component : Home,
  meta: { auth: false },
},{
  path : '/login',
  component : Login,
},{
  path : '/reg',
  component : Reg,
  meta: { auth: false },
},{
  path : '/person',
  component : Person
},{
  path : '*',
  component : Home
}];

const router = new VueRouter({
  mode: 'history',
  saveScrollPosition: true,
  routes
});

router.beforeEach(({meta, path}, from, next) => {
  var { auth = true } = meta;
  var isLogin = Boolean(store.state.login.token) //true用户已登录， false用户未登录

  if (auth && !isLogin && path !== '/login') {
    return next({ path: '/login' })
  }
  if(isLogin && (path == '/login' || path == '/reg')){
   return next({ path: '/person' })
   }
  next()
});

var app = new Vue({
  el: '#app',
  router,
  store,
  ...App,
});
