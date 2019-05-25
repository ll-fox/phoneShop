<template>
    <div class="photoinfo-container">
        <h3>{{photoinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间{{photoinfo.add_time|dateFormat}}</span>
            <span>点击次数：{{photoinfo.click}}</span>
        </p>

        <hr>
        <!-- 缩略图区域 -->
        <vue-preview :slides="slide1"></vue-preview>
        <!-- 图片内容区域 -->
        <div class="content" v-html="photoinfo.content"> 
        </div>
        <!-- 评论子组件 -->
        <comment-box :id="this.id"></comment-box>
    </div>    
</template>
<script>
//导入评论子组件

import comment from '../subconponents/comment.vue'
export default {
    data() {
        return {
            id: this.$route.params.id,
            photoinfo:{
                add_time:Date.now(),
                click:1,
                content:"开始觉得不是看不看见爱上创客空间仓库发货时快捷方便还是分开交伙食费和授课计划方式付款计划开发还是看见好看就是女会计还是贷款",
                id: 89,
                title: "现代简约 明亮的简单借款"
            },
            slide1: [
          {
            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
            title: 'Image Caption 1',
            w: 600,
            h: 400
          },
          {
            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
            title: 'Image Caption 2',
            w: 600,
            h: 400
          }
        ]
        }
    },
    methods: {
        
    },
    components:{//用来注册子组件的
        'comment-box':comment
        
    }
}
</script>
<style scoped>
.photoinfo-container{
    padding: 3px;
  }
.photoinfo-container h3{
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0
}
.photoinfo-container .subtitle{
    display: flex;
    justify-content: space-between;
    font-size: 13px
}
.photoinfo-container .content{
    font-size: 13px;
    line-height: 30px
}
</style>
