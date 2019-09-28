<template>
  
  <div class="box" ref="singleHeight">
    
    <header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"  @click="goback"></a>
			<h1 class="mui-title">{{friendimg[friendid].username}}</h1>
		</header>
    <div class="bubblebox" v-for="item in getmsglist" :key="item.index">
        <div class="bubble" > 
            <div class="jx">
                <p>{{item.msg}}</p> 
            </div>
            <div class="sjx"></div>
            <img :src="userhead.img" style="height:40px" >
        </div>
    </div>
    
    <div class="msginfo">
      <input type="text" v-model="msg" @keydown.enter="sendmsg" class="massage"/>
      <span @click="sendmsg" class="sendbtn">发送</span>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
import friendsinfo from '../friendsinfo.js'
import store from '../store.js'
export default {
  data() {
    return {
      msg: "请输入要发送的信息",
      friendid:this.$route.params.id-1,
      index:0,
      msglist:[],
      friendimg:[],
      userhead:{img:require('../images/userhead/user.jpg')}
    };
  },
  created(){
    this.getimg()
  },
  methods:{
      sendmsg(){ 
          var arrcode=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w']
          //console.log(this.$store)  store.state.a
          console.log(this.friendid)
          var item={msg:this.msg,id:this.index++}
          
          //this.$store.state[arrcode[this.friendid]].commit('pushmsglist',item)
          this.$store.commit(arrcode[this.friendid]+'/pushmsglist',item)
          console.log(this.$store.state.a)
          this.$nextTick(()=>{
					  window.scrollTo(0,this.$refs.singleHeight.offsetHeight-window.innerHeight)
          }) 
          this.msg=''
      },
      getimg(){
        this.friendimg=friendsinfo
      },
      goback(){
        window.history.go(-1)
      }
      
  },
  computed:{
    getmsglist(){
      var arrcode=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w']
      return this.$store.state[arrcode[this.friendid]].msglist
    }
  },
  //store
};
</script>
<style scoped>

.massage {
  margin: 0;
  padding: 0;
  border: none;
  background: #fff;
}
.box {
  background: #fff;
  padding-top: 80px;
  padding-bottom: 50px;
  position: absolute;
  width: 100%;
  z-index: 100;
}
.msginfo {
  display: flex;
  background: #f7f7f7;
  
  position: fixed;
  bottom: 0px;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 5px;
}
.msginfo input {
  width: 70%;
}
span.sendbtn {
  background: #07c160;
  width: 20%;
  height: 30px;
  color: #fff;
  border-radius: 5px;
  line-height: 30px;
  text-align: center;
}
span.sengbtn:active {
  background: #048f47;
}
.bubble{
    display: flex;
    float: right;
    margin-right: 15px;
    margin-bottom: 20px;
}
.bubble .sjx {
  width: 0px;
  height: 0px;
  border: solid 7px;
  border-color: #f5f5f5 #f5f5f5 #f5f5f5 #95ec69;
  align-self: center;
}
.bubble .jx{

    height: 40px;
    min-width: 80px;
    
    background: #95ec69;
    border-radius: 5px;
}
.bubble img{
    border-radius: 5px;
}
.jx p{
    line-height: 40px;
    padding: 0 5px;
    text-align: center;
}
.bubblebox{
    display: block;
    overflow: hidden;
    width: 100%;
   
}
.mui-bar.mui-bar-nav{
  background: #ededed;
}

</style>


