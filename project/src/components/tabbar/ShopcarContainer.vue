<template>
    <div class="shopcar-container">
        <div class="goood-list">

            <!-- 商品列表区域 -->
            <div class="mui-card" v-for="item in goodslist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch></mt-switch>
                        <img :src="item.thumn_path">
                        <div class="info">
                            <h1>{{item.title}}</h1>
                            <p>
                                <span class="pric">￥{{item.sell_price}}</span>
                                <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
                                <!-- 问题：如何从购物车中拿到商品的数量呢？ -->
                                <!-- 1.我们可以先创建一个 空对象，然后循环购物车中所有的商品数据，把当前循环这条商品的id ，作为 对象的属性名，count值，作为对象的属性值，这样，当把所有的商品循环一遍，就会得到一个对象：{88:1,90:2} -->
                                <a href="" @click.prevent="remove(item.id,)">删除</a>
                            </p>
                        </div>
					</div>
				</div>
			</div>
        </div>

        <!-- 结算区域 -->

        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner jiesuan">
                    <div class="left">
                        <p>总计(不含运费)</p>
                        <p>已勾选商品 <span class="red"> 0 </span>件，总价 <span class="red">￥0 </span></p>
                    </div>
                    <mt-button type="danger">去结算</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import numbox from '../subconponents/shopcar_nunbox.vue'
export default{
    data() {
        return {
            goodslist:[
               
            ]
        }
    },
    methods: {
        
    },
    //购物车数据请求

    created() {
        this.getGoodsList()
    },
    methods: {
        remove(id){
            this.$store.commit("removeFormCar",id)
        },
        getGoodsList(){
            //获取 store 中所有商品的id ，然后拼接出一个 用 逗号分隔的 字符串
            var idArr=[];
            this.$store.state.car.forEach(item=>idArr.push(item.id));
            //如果 购物车没有商品，则直接返回，不需要请求数据接口，否则报错
            if(idArr.length<=0){
                return
            }
            this.goodslist.push({
                    cou:1,
                    id:2,
                    title:"小米MIX3  6+128",
                    sell_price:3001,
                    thumn_path:"http://img1.gtimg.com/cq/pics/hv1/148/49/2295/149245018.jpg"
                })
        }
    }, 
    //         //获取购物车商品列表
    //         this.$http.get("api/goods/****/"+idArr.join(",")).then(result=>{
    //             if(result.body.status===0){
    //                 this.goodslist=result.body.message
    //             }
    //         })
    //     }
    // },
    components:{
        numbox
    }
}
</script>
<style scoped>
.shopcar-container{
    background-color: #eee;
    overflow: hidden;
}
.goood-list{
    
}
.goood-list img{
    width: 60px;
    height: 60px;
}
.goood-list h1{
    font-size: 13px;
}
.goood-list .info .price{
    color: red;
    font-weight: bold
}
.mui-card-content-inner{
    display: flex;
    align-items: center
}
.jiesuan{
    display: flex;
    justify-content: space-between;
    align-items: center
}
.jiesuan .red{
    color: red;
    font-weight: bold;
    font-size: 16px;
}
</style>
