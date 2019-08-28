<template>
  <div>
    <ul class="mui-table-view" v-for="item in newsList" :key="item.id">
      <li class="mui-table-view-cell mui-media">
        <router-link :to="'/home/newsinfo/'+item.id">
          <img
            class="mui-media-object mui-pull-left"
            :src="item.img_url"/>
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <span>发表于{{item.add_time | timeParse}}</span>
              <span>点赞{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
    
  </div>
</template>
<script>
import {Toast} from 'mint-ui'

export default {
    data(){
        return{
            newsList:[]
        }
    },
    created(){
        this.getNewslist()
    },
    methods:{
        getNewslist(){
            this.$http.get('http://www.liulongbin.top:3005/api/getnewslist').then(result=>{
                if(result.body.status===0){
                    this.newsList=result.body.message
                }else{
                    Toast('获取新闻列表失败')
                }
            })
        }
    }
};
</script>

<style scoped>
.mui-table-view h1 {
  font-size: 14px;
}
.mui-table-view p {
  color: blue;
  display: flex;
  font-size: 12px;
  flex-direction: row;
  justify-content: space-between;
}
</style>>
    
