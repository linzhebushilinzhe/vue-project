<template>
  <div class="appcontainer">

      <!-- 头部 -->
      <mt-header fixed title="vue-demo"></mt-header>
      <!-- 路由部分 -->
      <transition>
          <router-view></router-view>
      </transition>
      
      <!-- 尾部 -->
      <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/setting">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>
        
  </div>
</template>

<script>
   
</script>

<style scoped >
    .appcontainer{
        padding-top: 40px;
        padding-bottom:50px; 
        overflow-x: hidden;
    }
    .v-enter{
        transform: translateX(100%);
        opacity: 0;
        
    }
    .v-leave-to{
        position: absolute;
        opacity: 0;
        transform: translateX(-100%);
    }
    .v-enter-active,.v-leave-active{
        transition: all 0.5s ease;
    }
</style>