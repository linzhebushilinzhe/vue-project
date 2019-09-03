<template>
    <div class="ctm">
        <h1>发表评论</h1>
        <hr>
        <textarea placeholder="请输入评论内容" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postmsg">发表评论</mt-button>
        <div class="comment-item" v-for="(item,i) in commentinfo" :key="item.add_time">
            <p class="comment-userinfo">第{{i+1}}楼&nbsp;用户：{{item.user_name}} &nbsp;&nbsp;&nbsp;发表时间：{{item.add_time | timeParse}}</p>
            <p class="comment-info">{{item.content==='undefined' ? "用户很赖什么都没说" : item.content}}</p>
        </div>
        <mt-button type="danger" size="large" @click="getmore">more</mt-button>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
import qs from 'qs'
export default {
    data(){
        return{
            pageIndex:1,
            commentinfo:[],
            msg:''
        }
    },
    created(){
        this.getCommontinfo()
    }, 
    methods:{
        getCommontinfo(){
            this.axios.get("http://www.liulongbin.top:3005/api/getcomments/"+this.id+"?pageindex="
            +this.pageIndex).then(result => {
                if(result.data.status===0){
                    this.commentinfo=this.commentinfo.concat(result.data.message)
                    
                }else{
                    Toast('获取评论失败')
                }
            })
        },
        getmore(){
            this.pageIndex++;
            this.getCommontinfo();
        },
        postmsg(){
            if(this.msg.length===0){
                return Toast("不能输入为空")
            }
            this.axios.post("http://www.liulongbin.top:3005/api/postcomment/"+this.id,qs.stringify({
                comment:this.msg.trim()
            })).then(result=>{
                if(result.data.status===0){
                    var cmt={
                        user_name:'匿名用户',
                        add_time:Date.now(),
                        content:this.msg.trim()
                    }
                    this.commentinfo.unshift(cmt);
                    this.msg=''
                }else{
                    Toast("提交评论失败")
                }
            })
        }
    },
    props:["id"]
}
</script>
<style scoped>
    textarea{
        margin: 0;
    }
    .comment-item .comment-userinfo{
        background-color: #ccc;
        padding: 3px;
    }
    .comment-item .comment-info{
        text-indent: 2em;
    }
    .comment-item{
        margin: 10px 0px;
    }
    .ctm h1{
        font-size: 16px;
    }
</style>