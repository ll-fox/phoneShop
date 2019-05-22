<template>
    <div>
        <!-- 顶部滑动条 -->
        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',item.id==0? 'mui-active':'']"  v-for="item in cates" :key="item.id" @click="getPhotoListByCateId(item.id)">
                        {{item.title}}
                    </a>
                    </div>
				</div>

			</div>
        <ul class="photo-list">
            <!-- tag属性：将router-link渲染为li -->
            <router-link tag="li" v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id">
                <img v-lazy="item.img_url">
                <div class="info">
                    <h1 class="info-title">{{item.title}}</h1>
                    <div class="info-body">{{item.zhaiyao}}</div>
                </div>
            </router-link>
        </ul>

    </div>
</template>
<script>
//1.导入mui的js文件
import mui from '../../lib/mui/js/mui.js';

export default {
    data() {
        return {
            cates:[
                {
                    id:0,
                    title:"全部"
                },
                {
                    id:2,
                    title:"家居生活"
                },
                {
                    id:3,
                    title:"摄影设计"
                },
                {
                    id:4,
                    title:"科技创新"
                },
                {
                    id:5,
                    title:"空间设计"
                },
            ],
            list:[
                {
                    id: 10,
                    title:"哈哈哈哈哈模板",
                    img_url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3188040735,3180097480&fm=26&gp=0.jpg",
                    zhaiyao: "就是大家安徽大咖科技贷款骄傲骄傲的借口不打架打卡"
                },
                {
                    id: 30,
                    title:"哈哈哈哈哈模板",
                    img_url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3188040735,3180097480&fm=26&gp=0.jpg",
                    zhaiyao: "就是大家安徽大咖科技贷款骄傲骄傲的借口不打架打卡"
                }
            ]
        }
    },
    //第二个钩子函数，当组件中的DOM结构被渲染好并放入到页面中后，会执行这个钩子函数
    //如果要操作元素了，最好在mounted里面，因为，这个时候的DOM元素 是最新的
    mounted() {
        //2.初始化滑动组件
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
    },
    methods: {
        getPhotoListByCateId: function(catesId){
            
        }
    },
}
</script>
<style scoped>
*{
    touch-action: pan-x;
}
img[lazy="loading"]{
    width: 40px;
    height: 300px;
    margin: auto
}
img{
  width: 100%;
  vertical-align: middle;
}
.photo-list{
    list-style: none;
    margin: 0;
    padding: 10px;
}
.photo-list li{
background-color: #ccc;
margin-bottom: 10px;
box-shadow: 0 0 9px #ccc;
position: relative
}
.info{
    max-height: 84px;
    color: #fff;
    position: absolute;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4)
}
.info .info-title{
    font-size: 14px;
}
.info .info-zhahiyao{
    font-size: 12px;
}
</style>


