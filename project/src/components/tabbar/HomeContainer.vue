<template>
    <div>
        <!-- 轮播图 -->
        <swiper :lunbotuList="lunbotuList" :isfull='true'></swiper>
        <!-- 九宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
                    <img src="../../images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link  to="/home/photolist">
                    <img src="../../images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link  to="/home/goodslist">
                    <img src="../../images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div></a></li>
            
		</ul> 
    </div>
</template>
<script>
import swiper from '../subconponents/swiper.vue'
export default{
    data(){
        return{
            lunbotuList:[
                {
                    id:1,
                    img:"http://images.glass.cn/news/201901/9ae6a93c5ba54071b96beb6a1590b75d.jpg"
                },
                {
                    id:3,
                    img:"http://e0.ifengimg.com/04/2019/0506/E4E8FA94933B3DDC8835E60721AD6C8C475485F0_size71_w600_h400.jpeg"
                },
                {
                    id:4,
                    img:"http://www.cn314.com/d/file/xinpin/58b6114d439681788bcc473afd7976b2.jpg"
                }
            ]//保存轮播图的数组
        }
    },
    methods: {
        getLunbotu(){
            
        }
    },
    components:{
        swiper
    }
}
</script>
<style scoped>
    .mint-swipe{
        height: 200px;
    }
    img{
        width: 100%;
        height: 100%;
    }
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        border: none;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: 0
    }
    ul img{
        width: 60px;
        height: 60px;
    }
    .mui-media-body{
        font-size: 13px;
    }
</style>
