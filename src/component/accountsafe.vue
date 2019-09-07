<template>
  <div>
    <div class="mui-scroll">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell">
          <a id="head" class="mui-navigate-right">
            头像
            <span class="mui-pull-right head">
              <img
                class="head-img mui-action-preview"
                id="head-img1"
                :src="userhead.img"
                style="height:40px"
              />
            </span>
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a>
            姓名
            <span class="mui-pull-right">淋着</span>
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a>
            账号
            <span class="mui-pull-right">linzhe141@qq.com</span>
          </a>
        </li>
      </ul>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell">
          <a>
            QQ号
            <span class="mui-pull-right">88888888</span>
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a>
            手机号
            <span class="mui-pull-right">18601234567</span>
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a>
            邮箱地址
            <span class="mui-pull-right">linzhe141@qq.com</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      userhead:{img:require('../images/userhead/user.jpg')}
    }
  }
}
</script>