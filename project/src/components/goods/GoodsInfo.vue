<template>
    <div class="goodsinfo-container">
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
            <div class="mui-card-header">页眉</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
                </div>
            </div>
        </div>
        <!-- 商品参数区域 -->
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
					</div>
				</div>
			</div>
    </div>  
</template>
<script>
import swiper from '../subconponents/swiper.vue'
export default {
    data() {
        return {
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
            ]

        }
    },
    components:{
        swiper
    }
}
</script>
<style scoped>
.goodsinfo-container{
    background-color: #eee;
    overflow: hidden;
}
</style>

