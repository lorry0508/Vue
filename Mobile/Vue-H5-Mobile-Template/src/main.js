import Vue from 'vue';
import App from './App.vue';
import router from './router';

// 引入全局样式
import '@/assets/css/index.scss';
import '@/plugins/vant';
import { $cdn } from '@/config';

Vue.prototype.$cdn = $cdn;
Vue.config.productionTip = false

// 路由导航守卫
// router.beforeEach((to, from, next) => {
//     console.log(to);
//     console.log(from);
//     next();
// });

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})