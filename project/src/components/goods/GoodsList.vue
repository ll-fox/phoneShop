<template>
    <div class="goods-list">
        <router-link tag="div" class="good-item" v-for="item in goodslist" :key="item.id" :to="'/home/goodsinfo/'+item.id">
            <img :src="item.img_url" alt="">
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">
                        ￥{{item.sell_price}}
                    </span>
                    <span class="old">
                        ￥{{item.market_price}}
                    </span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{item.stock_quantity}}件</span>
                </p>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            goodslist:[
                {
                    id:2,
                    img_url:"http://p99.pstatp.com/large/pgc-image/1540475253295abefad1991",
                    title:"小米mix3 16G+128",
                    sell_price:7647,
                    market_price:8888,
                    stock_quantity:758
                }
            ]
        }
    },
}
</script>
<style scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between
}
.good-item{
    width: 49%;
    margin: 3px 0;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
}
.good-item img{
    width: 100%;
}
.good-item .title{
    font-size: 14px;
}
.good-item .info{
    background-color: #eee;
}
.good-item .info p{
    margin: 0;
    padding: 5px;
}
.good-item .info .price{
    
}
.good-item .info .price .now{
    color: red;
    font-weight: bold;
    font-size: 16px;
}
.good-item .info .price .old{
    text-decoration: line-through;
    font-size: 12px;
    margin-left: 10px;
}
.good-item .info .sell{
    display: flex;
    justify-content: space-between;
}
</style>
