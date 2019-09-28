<template>
  <div class="setcmp">
    <div class="mui-scroll-wrapper">
      <div class="mui-scroll">
        <ul class="mui-table-view mui-table-view-chevron">
          <li class="mui-table-view-cell mui-media">
            <a class="mui-navigate-right" href="#account">
              <img class="mui-media-object mui-pull-left head-img" id="head-img" :src="userhead.img" style="height:40px" />
              <div class="mui-media-body">
                Hello MUI
                <p class="mui-ellipsis">账号:hellomui</p>
              </div>
            </a>
          </li>
        </ul>
        <ul class="mui-table-view mui-table-view-chevron">
          <li class="mui-table-view-cell">
            <router-link to="/setting/accountsafe" class="mui-navigate-right">账号与安全</router-link>
          </li>
        </ul>
        <ul class="mui-table-view mui-table-view-chevron">
          <li class="mui-table-view-cell">
            <router-link to="/setting/msginform" class="mui-navigate-right">新消息通知</router-link>
          </li>
          <li class="mui-table-view-cell">
            <a href="#privacy" class="mui-navigate-right">隐私</a>
          </li>
          <li class="mui-table-view-cell">
            <a href="#general" class="mui-navigate-right">通用</a>
          </li>
        </ul>
        <ul class="mui-table-view mui-table-view-chevron">
          <li class="mui-table-view-cell">
            <a href="#about" class="mui-navigate-right">
              关于MUI
              <i class="mui-pull-right update">V3.1.0</i>
            </a>
          </li>
        </ul>
        <ul class="mui-table-view">
          <li class="mui-table-view-cell" style="text-align: center;">
            <mt-button type="primary" size="large" @click="logout">退出登录</mt-button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
export default {
  data(){
    return{
      userhead:{img:require('../../images/userhead/user.jpg')}
    }
  },
  methods:{
    logout(){
      MessageBox({
        title: '提示',
        message: '确定执行此操作?',
        showCancelButton: true
      })
      MessageBox.confirm('确定执行此操作?').then(action => {
        
      });

    }
  }
};
</script>
<style  scoped>
/* .mint-header.is-fixed{
        z-index: 3;
    }
    .mui-page{
        height:100%;
    } */
.mui-scroll-wrapper {
  /* padding-top: 40px; */
}
</style>