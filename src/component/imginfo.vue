<template>
    <div>
        <h3>{{imginfomsg.title}} · · · · · ·</h3>
　　    <p v-html="imginfomsg.content"></p>  
    </div>
</template>
<script>
import imginfomation from '../info.js'
export default {
    data(){
        return {
            imginfomsg:{
                
            }
        }
    },
    created(){
        this.getimginfo()
    },
    methods:{
        getimginfo(){
            this.imginfomsg=imginfomation[this.$route.params.id-1]
        }    
        
    }
}
</script>
<style scoped>
    h3{
        color: #007722;
        font-size: 16px;
    }
    p{
        text-indent: 2em;
        
    }
</style>