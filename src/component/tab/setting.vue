<template>
  <div class="setcmp">
    <div class="mui-scroll-wrapper">
      <div class="mui-scroll">
        <ul class="mui-table-view mui-table-view-chevron">
          <li class="mui-table-view-cell mui-media">
            <a class="mui-navigate-right" href="#account">
              <img class="mui-media-object mui-pull-left head-img" id="head-img" src="https://i1.hdslb.com/bfs/face/918f1377b00ebde63d7adfcc2bb9003929c2e238.jpg" style="height:40px" />
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
            <mt-button type="primary" size="large">退出登录</mt-button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style  scoped>
/* .mint-header.is-fixed{
        z-index: 3;
    }
    .mui-page{
        height:100%;
    } */
.mui-scroll-wrapper {
  padding-top: 40px;
}
</style>