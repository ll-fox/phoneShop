<template>
    <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox" />
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.js";
export default {
    mounted() {
        //初始化数字选择框组件
        mui(".mui-numbox").numbox();
    },
    methods: {
        countChanged(){
        //每当文本框的数据被调用的时候，立即把最新的数据，通过事件调用，传递给父组件(使用ref)
        this.$emit("getcount",parseInt(this.$refs.numbox.value));
        }
    },
    props:["max"],
    watch: {
        //属性监听,
        //通过父组件传过来的值，设置商品数目的最大值
        'max':function(newVal,oldVal){
            mui(".mui-numbox").numbox().setOption("max",newVal)
        }
    },
    
    
}
</script>
<style scoped>

</style>
