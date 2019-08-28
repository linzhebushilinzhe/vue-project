<template>
  <div class="newinfo-container">
    <h3>{{newsinfo.title}}</h3>
    <p>
      <span>发表时间：{{ newsinfo.add_time | timeParse }}</span>
      <span>点击次数：{{ newsinfo.click }}</span>
    </p>
    <hr />
    <div class="newinfo-content" v-html="newsinfo.content"></div>

    <comment-area :id="this.id"></comment-area>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import comment from '../comment.vue'
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsinfo: {}
    };
  },
  created() {
    this.getNewsinfo();
  },
  methods: {
    getNewsinfo() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getnew/" + this.id)
        .then(result => {
          console.log(result.body.status);
          if (result.body.status === 0) {
            this.newsinfo = result.body.message[0];
          } else {
            Toast("获取新闻信息失败");
          }
        });
    }
  },
  components: {
    "comment-area": comment
  }
  
};
</script>

<style>
.newinfo-container {
  padding: 0px 4px;
}
.newinfo-container h3 {
  font-size: 16px;
  color: red;
  text-align: center;
  margin: 15px 0;
}
.newinfo-container p {
  display: flex;
  justify-content: space-between;
}
</style>