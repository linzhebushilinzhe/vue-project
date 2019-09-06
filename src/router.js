//路由

import VueRouter from 'vue-router'
import home from '../src/component/tab/Home.vue'
import member from '../src/component/tab/Member.vue'

import newslist from '../src/component/newsList/newList.vue'
import newsinfo from '../src/component/newsinfo/newsinfo.vue'
import settingcpt from '../src/component/tab/setting.vue'
import imgshare from '../src/component/imglist.vue'

import imginfo from '../src/component/imginfo.vue'

import usermsg from '../src/component/usermsg.vue'

import accountsafe from '../src/component/accountsafe.vue'
import msginform from '../src/component/msginform.vue'
import friend from '../src/component/friend.vue'
const router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/member',component:member},
        {path:'/home/newlist',component:newslist},
        {path:'/home/newsinfo/:id',component:newsinfo},
        {path:'/setting',component:settingcpt},
        {path:'/home/imgshare',component:imgshare},
        {path:'/home/share/:id',component:imginfo},
        {path:'/home/problem',component:usermsg},
        {path:'/setting/accountsafe',component:accountsafe},
        {path:'/setting/msginform',component:msginform},
        {path:'/member/:id',component:friend}

    ],
    linkActiveClass:'mui-active'    
})

export default router