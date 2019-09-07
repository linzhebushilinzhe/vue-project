<template>
  <div>
    <h1 class="friendlistname">
      好友列表
    </h1>
    <ul class="mui-table-view" v-for="item in list" :key="item.id">
      <li class="mui-table-view-cell mui-media">
        <router-link :to="'/member/'+item.id">
          <!-- <img class="mui-media-object mui-pull-left" :src="item.imgurl" style="height:40px" /> -->
          <img class="mui-media-object mui-pull-left" :src="item.imgurl" style="height:40px" />
          <div class="mui-media-body">
            <h4 class="friendname">{{item.username}}</h4>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import friendsinfo from '../../friendsinfo.js'
export default {
    data(){
        return{
            list:[]
        }
    },
    created(){
      this.getfriendinfo()
    },
    methods:{
      getfriendinfo(){
        this.list=friendsinfo
      }
    }
};
</script>

<style  scoped>
    img{
        box-shadow: 0 0 1px black;
        border: 1ps solid black;
    }
    .friendname{
        line-height: 20px;
        font-size: 16px;
        font-weight: 100;
        text-indent: 1em;
    }
    .friendlistname{
        font-size: 16px;
        font-weight: 500;
    }
</style>