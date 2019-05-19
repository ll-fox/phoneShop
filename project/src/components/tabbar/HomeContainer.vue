<template>
    <div>
        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
            <!-- 在组件中使用 v-for 循环的话，一定要使用key -->
            <mt-swipe-item>
                <img src="http://www.tms.org.cn/uploads/allimg/180315/1-1P31510025V91.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="http://d.ifengimg.com/w600/e0.ifengimg.com/09/2018/1207/17D68B2EDD6EFB34F02AB508E7565E953CD167CB_size29_w640_h361.jpeg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="http://g.hiphotos.baidu.com/image/h%3D300/sign=9d9f776b1bce36d3bd0485300af23a24/fcfaaf51f3deb48f4a7e2a6ffe1f3a292df57868.jpg" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <!-- 九宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div></a></li>
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
export default{
    data(){
        return{
            lunbotuList:[
                
            ]//保存轮播图的数组
        }
    },
    methods: {
        getLunbotu(){
            
        }
    },
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
