<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbolist" :key="item.img">
                <img :src="item.img" alt="">
            </mt-swipe-item> 
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newlist">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></a></li>
		            
		        </ul> 
        <h1>home</h1>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return{
            lunbolist:[]
        }
    },
    created(){
        this.getLunbo();
    },
    methods:{
        getLunbo(){
            this.$http.get("http://www.liulongbin.top:3005/api/getlunbo").then(result =>{
                //console.log(result.body);
                if(result.body.status===0){
                    this.lunbolist=result.body.message;
                    
                }else{
                    Toast("获取失败")
                }
            })
        }
    }
}
</script>

<style  scoped>
    .mint-swipe{
        height: 200px;
    }
    .mint-swipe-item{
        background: pink;
    }
    img{
        width: 100%;
        height: 100%;
    }
    .mui-table-view.mui-grid-view.mui-grid-9{
        background: white;
    }
    .mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3{
        border: 0;
    }
</style>