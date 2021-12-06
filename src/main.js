import Vue from 'vue'
import App from './app'
import VueRouter from 'vue-router'
import route from './route'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import axios from 'axios'
Vue.use(Antd);

Vue.use(VueRouter)
const router=new VueRouter({
  mode:'history',
  base:__dirname,
  routes:route
})

    //解决路由跳转原路由或者刷新出错
    const originalReplace = VueRouter.prototype.replace;
    VueRouter.prototype.replace = function replace(location) {
        return originalReplace.call(this, location).catch(err => err);
    };
    const originalPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push(location) {
        return originalPush.call(this, location).catch(err => err)
    }

Vue.config.productionTip = false
Vue.prototype.axios = axios

new Vue({
  router,
  Antd,
  axios,
  render: h => h(App),
}).$mount('#app')
