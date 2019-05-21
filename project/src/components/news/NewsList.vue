<template>
    <div>
        <ul class="mui-table-view" v-for="item in newslist" :key="item.id">
				<li class="mui-table-view-cell mui-media">
					<router-link :to="'/home/newsinfo/'+ item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
								<span>发表时间：{{item.add_time | dateFormat}}</span>
								<span>点击：{{item.click}}次</span>
							</p>
						</div>
					</router-link>
				</li>
				
			</ul>
    </div>
</template>
<script>
export default{
	data(){
		return{
			newslist:[
				{
					id:1,
					title:"一季度多家企业利润跌幅超50%",
					add_time:"2015-04-16T03：50：20.000Z",
					click:1,
					img_url:"http://www.fzlol.com/upimg/allimg/140711/1_19143495T.jpg"
				},
				{
					id:2,
					title:"一季度多家企业利润跌幅超50%",
					add_time:"2015-04-16T03：50：20.000Z",
					click:1,
					img_url:"http://pic44.nipic.com/20140721/19265208_063512712412_2.jpg"
				},
				{
					id:3,
					title:"一季度多家企业利润跌幅超50%",
					add_time:"2015-04-16T03：50：20.000Z",
					click:1,
					img_url:"http://www.fzlol.com/upimg/allimg/140711/1_19143495T.jpg"
				},
			]
		}
	}
}
</script>
<style scoped>
	.mui-media-body h1{
		font-size: 14px;
	}
	.mui-ellipsis {
		font-size: 12px;
		color: #226aff;
		display: flex;
		justify-content: space-between;
	}
</style>

