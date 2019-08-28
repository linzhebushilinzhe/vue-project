//路由

import VueRouter from 'vue-router'
import home from '../src/component/tab/Home.vue'
import member from '../src/component/tab/Member.vue'
import shopcar from '../src/component/tab/Shopcar.vue'
import serch from '../src/component/tab/Search.vue'
import newslist from '../src/component/newsList/newList.vue'
import newsinfo from '../src/component/newsinfo/newsinfo.vue'
const router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/member',component:member},
        {path:'/shopcar',component:shopcar},
        {path:'/search',component:serch},
        {path:'/home/newlist',component:newslist},
        {path:'/home/newsinfo/:id',component:newsinfo}
        
    ],
    linkActiveClass:'mui-active'    
})

export default router