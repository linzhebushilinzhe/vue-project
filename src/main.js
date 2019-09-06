//入口文件

//console.log("ok")

import Vue from 'vue'

// import { Header,Swipe, SwipeItem,Button,Lazyload } from 'mint-ui'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../lib/mui-master/dist/css/mui.css'
import '../lib/mui-master/examples/hello-mui/css/icons-extra.css'
import VueRouter from 'vue-router'
import app from './App.vue'
import router from './router'

import axios from 'axios';
import VueAxios from 'vue-axios'
import moment from 'moment'
import $ from 'jquery'

// import { Lazyload } from 'mint-ui';
Vue.use(MintUI)

Vue.prototype.$ajax = axios
Vue.use(VueAxios,axios)
Vue.use(VueRouter)
//Vue.use(VueResource)
// Vue.component(Header.name,Header)
// Vue.component(Button.name,Button)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
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


