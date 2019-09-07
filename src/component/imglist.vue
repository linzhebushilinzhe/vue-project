<template>
  <div>
    <p class="title">热门影视</p>
      <ul>
        <li v-for="item in list" :key="item.id">
            <router-link :to="'/home/share/'+item.id">
                <img v-lazy="item.img_url" />
                <p class="infomsg">点击了解详情···</p>
            </router-link>
          
        </li>
      </ul>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          img_url:
            require('../images/tvphoto/tv1.jpg'),
          id: 1
        },
        {
          img_url:
            require('../images/tvphoto/tv2.jpg'),
          id: 2
        },
        {
          img_url:
            require('../images/tvphoto/tv3.jpg'),
          id: 3
        }
      ]
    };
  },
  created() {
    //   this.getimg()
  },
  methods: {
    //   getimg(){
    //       this.axios.get('http://www.liulongbin.top:3005/api/getimages/18')
    //       .then(result =>{
    //           console.log(result)
    //           if(result.data.status===0){
    //                   this.list=this.list.concat(result.data.message)
    //             }
    //         }
    //       )
    //       this.axios.get('http://www.liulongbin.top:3005/api/getimages/17')
    //       .then(result =>{
    //           console.log(result)
    //           if(result.data.status===0){
    //                   this.list=this.list.concat(result.data.message)
    //             }
    //         }
    //       )
    //       this.axios.get('http://www.liulongbin.top:3005/api/getimages/19')
    //       .then(result =>{
    //           console.log(result)
    //           if(result.data.status===0){
    //                   this.list=this.list.concat(result.data.message)
    //             }
    //         }
    //       )
    //   }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
  background: gray;
  text-align: center;
  width: 80%;
  margin: 5px 10% 10px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px black;
  position: relative;
}
img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.infomsg {
  position: absolute;
  right: 10%;
  bottom: 0;
  text-indent: 2em;
  color: white;
  font-weight: bold;
}
p.title{
  text-align: center;
  font-size: 2em;
  height: 2em;
  line-height: 2em;
}

</style>