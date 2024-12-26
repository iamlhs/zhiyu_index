import { createRouter,createWebHistory,RouteRecordRaw } from "vue-router";
import Layout from '@/layout/Index.vue'
const routes:Array<RouteRecordRaw>=[
    {
        path:'/',
        name:'home',
        component:Layout,
        children:[
            {
                path:'/banner',
                name:'banner',
                component:()=>import ('@/views/banner/Index.vue')
            },{
                path:'/category',
                name:'category',
                component:()=>import ('@/views/category/Index.vue')
            },{
                path:'/comment',
                name:'comment',
                component:()=>import ('@/views/comment/Index.vue')
            },{
                path:'/goods',
                name:'goods',
                component:()=>import ('@/views/goods/Index.vue')
            },{
                path:'/order',
                name:'order',
                component:()=>import ('@/views/order/Index.vue')
            },{
                path:'/user',
                name:'user',
                component:()=>import ('@/views/user/Index.vue')
            },
        ]
    }
]
const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router