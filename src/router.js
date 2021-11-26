import Vue from 'vue';
import VueRouter from 'vue-router';
import layout from './modules/layout/index.vue'

Vue.use(VueRouter);


const routes =[
    {
        path: '/', 
        redirect: '/index' 
    },
    {
        path:'/',
        name:'主页',
        component:layout,
        children: [
            {
              path: 'index',
              name: '首页',
            //   component:() => import(/* webpackChunkName: "views" */ './modules/layout/index.vue')
            }
        ]
    },
]



const router =  new VueRouter({
    routes
})

export default router;