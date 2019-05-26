<template>
    <div class="goodsinfo-container">
        <transition 
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>
        
        <!-- 商品轮播区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                   <swiper :lunbotuList="lunbotu" :isfull='false'></swiper>
                </div>
            </div>
        </div>

        <!-- 商品购买区域 -->
        <div class="mui-card">
            <div class="mui-card-header">{{goodsinfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价：<del>￥{{goodsinfo.market_price}}</del>&nbsp;&nbsp;销售价：<span class="new_price">￥{{goodsinfo.sell_price}}</span>
                    </p>
                    <p>购买数量:
                        <numbox @getcount="getSelectCount" :max="goodsinfo.stock_quantity"></numbox>
                    </p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                        <!--  -->
                    </p>
                </div>
            </div>
        </div>
        <!-- 商品参数区域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{goodsinfo.goods_no}}</p>
                    <p>库存情况：{{goodsinfo.stock_quantity}}件</p>
                    <p>上架时间：{{goodsinfo.add_time}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
            </div>
        </div>
    </div>  
</template>
<script>
import swiper from '../subconponents/swiper.vue'
//导入数字选择框
import numbox from '../subconponents/goodsinfo_numbox.vue'
export default {
    data() {
        return {
            id:this.$route.params.id,
            lunbotu:[
                {
                    id:1,
                    img:"http://pic-bucket.nosdn.127.net/photo/0011/2018-11-30/E1RPDTE95QJ50011NOS.jpg"
                },
                {
                    id:3,
                    img:"http://img1.gtimg.com/cq/pics/hv1/148/49/2295/149245018.jpg"
                },
                {
                    id:4,
                    img:"http://attach.bbs.miui.com/forum/201808/31/213302a9ynhjmjhzmu5he2.jpg"
                }
            ],
            goodsinfo:{
                add_time:"2018-05-06 12:12",
                goods_no:"sd7827928942",
                id:37,
                market_price:2699,
                sell_price:2199,
                stock_quantity:60,
                title:"小米max3 6+128"
            },
            ballFlag:false, //控制小球隐藏出现
            selectedCount:1 //保存用户选中的商品数量

        }
    },
    methods: {
        goDesc(id){
            //点击使用编程式导航 跳转到图文介绍
            this.$router.push({name:"goodsdesc",params:{id}})
        },
        goComment(id){
            //点击使用编程式导航 跳转到评论
            this.$router.push({name:"goodscomment",params:{id}})
        },
        addToShopCar(){
            //添加到购物车
            this.ballFlag=!this.ballFlag
        },
        beforeEnter(el){
            el.style.transform="translate(0,0)";
        },
        enter(el,done){
            el.offsetWidth;
            //获取小球的位置
            const ballPosition=this.$refs.ball.getBoundingClientRect();
            //获取 徽标的位置
            const badgePosition=document.getElementById('badge').getBoundingClientRect();

            const xDist=badgePosition.left - ballPosition.left;
            const yDist=badgePosition.top - ballPosition.top;


            el.style.transform=`translate(${xDist}px,${yDist}px)`;
            el.style.transition="all 0.5s ease";
            done()
        },
        afterEnter(el){
            this.ballFlag=!this.ballFlag;
        },
        getSelectCount(count){
            //当子组件
            this.selectedCount = count;
            console.log("父组件拿到的数量值为"+this.selectedCount)
        }


    },
    components:{
        swiper,
        numbox
    }
}
</script>
<style scoped>
.goodsinfo-container{
    background-color: #eee;
    overflow: hidden;
}
.mui-card-footer{
    display: block;
}
.mui-card-footer button{
    margin:15px 0;
}
.mui-card-content-inner .new_price{
    color: red
}
.ball{
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    top: 388px;
    left: 152px;
    z-index: 99;
}
</style>

