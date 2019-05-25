<template>
    <div>
        <mt-swipe :auto="4000">
            <!-- 在组件中使用 v-for 循环的话，一定要使用key -->
            <!-- 将来 ，谁使用此轮播图组件，谁为我们传递 lunbotuLIst -->
            <!-- 此时，lunbotuLIst 应该是父组件向子组件传值来设置 -->
            <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
                <img :src="item.img" :class="{full:isfull}">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
    props:["lunbotuList","isfull"]
}
</script>
<style scoped>
    .mint-swipe{
        height: 200px;
    }
    .mint-swipe-item{
        text-align: center;
    }
    img{
        width: 100%;
        height: 100%;
    }
    .full{
        width: 100%;
    }
</style>

