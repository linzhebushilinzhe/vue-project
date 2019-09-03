<template>
    <div>
        <p>遇到问题</p>
        <textarea rows="10" placeholder="请详细描述您遇到的问题" v-model="promsg"></textarea>
        <input type="text" name="" id="" placeholder="请输入手机号码" v-model="phonenumber">
        <mt-button type="primary" size="large" @click="umcommit">提交</mt-button>
    </div>
</template>
<script>
import  {Toast} from 'mint-ui'
import { setTimeout } from 'timers';
export default {
    data(){
        return{
            promsg:'',
            phonenumber:''
        }
    },
    methods:{
        umcommit(){
            if(this.promsg.length===0){
                var x=Toast("不能输入为空")
            }
            if(!(/^1[3456789]\d{9}$/.test(this.phonenumber))){
                Toast("请输入正确的电话号码")
            }
        }
    }
}
</script>