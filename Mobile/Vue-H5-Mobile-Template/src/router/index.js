import Vue from 'vue';
import Router from 'vue-router';
import { constantRouterMap } from './router.config.js';

Vue.use(Router);

const createRouter = () => {
    new Router({
        routes: constantRouterMap
    })
};

const router = createRouter()

export default router;