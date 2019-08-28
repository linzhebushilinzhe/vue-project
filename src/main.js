//入口文件

console.log("ok")

import Vue from 'vue'

import { Header } from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../lib/mui-master/dist/css/mui.css'
import app from './App.vue'

Vue.component(Header.name,Header)

var vm=new Vue({
    el:"#app",
    render(createEle){
        return createEle(app);
    }
})