<template>
    <div class="goodsdesc">
        <h3>{{info.title}}</h3>
        <hr>
        <div class="content" v-html="info.content">

        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            info:{
                title:'小米MIX3 故宫版',
                content:"ID生活十分难看就你看你看今年超级女神尽可能地靠大家说你看见女神快捷地回到家你觉得机会千万以hejqjkdb，低价位的的情况稳定。电脑网为您"
            }
        }
    },
    
}
</script>
<style scoped>
.goodsdesc{
    padding: 4px;
}
.goodsdesc h3{
    font-size: 16px;
    text-align: center;
    color: #226aff;
    margin: 15px 0;
}
</style>
