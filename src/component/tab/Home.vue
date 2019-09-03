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
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/imgshare">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">3</span></span>
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/problem">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div></router-link></li>		        	            
		        </ul> 
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return{
            lunbolist:[
                {img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1936559306,183335904&fm=26&gp=0.jpg'},
                {img:'https://imgsa.baidu.com/forum/w%3D580/sign=4971d1015ae736d158138c00ab514ffc/38e04e540923dd54a73138b5df09b3de9e8248a5.jpg'},
                {img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4067318029,576814558&fm=26&gp=0.jpg'}
            ]
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