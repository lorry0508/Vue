import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 全局引入按需引入UI库 vant
import '@/plugins/vant'
// 引入全局样式
import '@/assets/css/index.scss'

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    render: h => h(App),
});