<template>
     <div class="newinfo-container">
         <h3 class="title">{{message.title}}</h3>
         <p class="subtitle">
             <span>发表时间：{{message.add_time | dateFormat}}</span>
             <span>点击：{{message.click}}次</span>
         </p>

         <hr>

         <div class="content">{{message.content}}</div>

         <!-- 评论区子组件 -->
         <comment-box :id="this.id"></comment-box>
     </div>
</template>
<script>
import comment from '../subconponents/comment.vue'
export default{
    data() {
        return {
            id: this.$route.params.id,//将URL地址中传递过来的id值，挂在到 data 上，方便以后的调用
            message:{
                title:"买房还是炒股",
                click:2,
                add_time:"2018-04-03 09:54",
                content:"就是垃圾开发环境案件发货计划发空间十分会计师会计刺客是不可不分开不上课不吃亏1那谁打即可将被删除开不开机爱空间被科技部科技安居客你的就是你看坚持科技市场空间把我空间分布上课就是尽快发济南科技市场口碑在恐怖恐怖的加强进口的空间不产生不可"

            }
        }
    },
    components:{//用来注册子组件的
        'comment-box':comment
        
    }
}
</script>
<style scoped>
.newinfo-container{
    padding: 0 4px;
}
.title{
    font-size: 16px;
    text-align: center;
    margin: 15px;
    color: red
}
.subtitle{
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between
}
.content{

}
</style>
