<template>
    <div class="cmt-container">
        <h1>发表评论</h1>
        <hr>
        <textarea placeholder="请输入要BB的内容（最多BB二十个字）" maxlength="120" v-model="msg"></textarea>

        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="item in comment" :key="item.add_time">
                <div class="cmt-title">
                    第{{item.i}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time|dateFormat}}
                </div>
                <div class="cmt-body">
                    {{item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" >加载更多</mt-button>
    </div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
    data() {
        return {
            pageIndex:1,//默认展示第一页数据
            comment:[
                {
                    i:1,
                    user_name:"匿名用户",
                    add_time:"2017-12-23 09:53",
                    content:"阿斯顿科技示范"
                },
                {
                    i:2,
                    user_name:"匿名用户",
                    add_time:"2017-12-23 09:33",
                    content:"垃圾垃圾啊"
                },
                {
                    i:3,
                    user_name:"匿名用户",
                    add_time:"2017-12-23 02:53",
                    content:"呵呵呵呵呵呵呵呵呵呵h"
                },
                {
                    i:4,
                    user_name:"匿名用户",
                    add_time:"2017-12-23 00:53",
                    content:"届时将会开始交换空间"
                },
                {
                    user_name:"匿名用户",
                    add_time:"2017-12-23 11:53",
                    content:"精虫上脑济南济南烧烤几点开始"
                },
            ],
            msg:''//评论输入的内容
        }
    },
    //获取服务端数据
    // created() {//浏览器加载时执行getComments（）函数获取数据
    //     this.getComments();
    // },

    methods: {
    //     getComments(){
    //         this.http.get("端口号").then(result=>{
    //             if(result.body.status===0){
    //                 this.comments=this.comments.concat(result.body.message)
    //             }else{
    //                 Toast('获取评论失败')
    //             }
    //         })
    //     },

    //     getMore(){//加载更多
    //         this.pageIndex++;
    //         this.getComments();
    //     }
        postComment(){//发表评论
            if(this.msg.trim().length===0){
                return Toast('评论内容不能为空！');
            }
            //post 请求参数
            //参数1：请求的url地址
            //参数2：提交给服务器的数据对象{content：this.msg}提交时候，表单中数据格式{ emulateJSON：ture }
            //参数3：定义
            // this.$http.post('提交的地址'+this.$route.params.id,{content:this.msg.trim()}).then(function(result){
            //     if(result.body.status===0){
            //         var cmt = {
            //             user_name:"匿名用户",
            //             add_time:Date.now(),
            //             content:this.msg.trim()
            //         };
            //         this.comment.unshift(cmt);
            //         this.msg="";
            //     }
            // })


            //自己写的本地发表评论
            var cmt = {
                        user_name:"匿名用户",
                        add_time:Date.now(),
                        content:this.msg.trim()
                    };
                    this.comment.unshift(cmt);
                    this.msg="";

        }
    },
    
    props:["id"]
}
</script>
<style scoped>
.cmt-container h3{
    font-size: 18px;
}
.cmt-container textarea{
    font-size: 14px;
    height: 85px;
    margin: 0
}
.cmt-container .cmt-list{
    margin: 5px 0;
}
.cmt-container .cmt-list .cmt-item{
    font-size: 13px;
}
.cmt-container .cmt-list .cmt-item .cmt-title{
    widows: 100%;
    line-height: 30px;
    background-color: #ccc;

}
.cmt-container .cmt-list .cmt-item .cmt-body{
    line-height: 35px;
    text-indent: 2em
}
</style>

