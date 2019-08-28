//入口文件

//console.log("ok")

import Vue from 'vue'

import { Header,Swipe, SwipeItem,Button } from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../lib/mui-master/dist/css/mui.css'
import '../lib/mui-master/examples/hello-mui/css/icons-extra.css'
import VueRouter from 'vue-router'
import app from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
import axios from 'axios';
import moment from 'moment'
Vue.prototype.$axios = axios;
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.component(Header.name,Header)
Vue.component(Button.name,Button)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.filter('timeParse',function(str,pattern='YYYY-MM-DD HH:mm:ss'){
    return moment(str).format(pattern)
})
var vm=new Vue({
    el:"#app",
    render(createEle){
        return createEle(app);
    },
    router
})