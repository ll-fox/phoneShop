console.log('ok');
import Vue from 'vue'
//1.1导入路由的包
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter)
//1.3导入自己的router.js
import router from "./router.js"
//导入时间插件

//注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)

//每次刚进入网站，肯定会调用index.js 在刚调用的时候，先从本地存储中，把购物车的数据读出来，存放到 store 中
var car = JSON.parse(localStorage.getItem('car')||'[]')
var store= new Vuex.Store({
    state:{//this.$store.state.***
        car:[]//将购物车中的商品数量，用一个数组存储起来，在car数组中，存储一些商品对象，咱们可以暂时将这个商品对象，设计成这个样子
        //{id：商品的id，count：要购买的数量，price：商品的单价，selected：false}
    },
    mutations:{//this.$store.commit('方法的名称'，‘按需传递唯一参数’)
        addToCar(state,goodsinfo){//点击加入购物车，把商品信息，保存到store中的car上
            //分析：
            //1.如果购物车中之前就已经有了对应的商品了，那么只需要更新数量
            //2.如果没有，直接把商品数据，push 到car 即可

            //假设 在购物车中，没有找到对应商品
            var flag=false

            state.car.some(item=>{
                if(item.id=goodsinfo.id){
                    item.count+=parseInt(goodsinfo.count);
                    flag=true;
                    return true;
                }
            })
            //如果最终循环完毕，得到的flag 还是 false ，则把商品数据直接push到购物车中
            if(!flag){
                state.car.push(goodsinfo)
            }

            //当更新car之后，把car 数组 ，存储到 本地的 localStorage 中
            localStorage.setItem('car',JSON.stringify(state.car))
            
        },
        updateGoodsInfo(state,goodsinfo){//购物车内修改商品数量
            state.car.some(item=>{
                if(item.id==goodsinfo.id){
                    item.count=parseInt(goodsinfo.count);
                    return true
                }
            })
            //当修改完商品的数量，把最新的数量保存到 本地存储中
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        removeFormCar(state,id){
            //根据id，从store中的购物车中删除对应的那条数据
            state.car.some((item,i)=>{
                if(item.id==id){
                    state.car.splice(i,1)
                    return true
                }
            })
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        updateGoodsSelected(state,info){
            state.car.some(item=>{
                if(item.id==info.id){
                    item.selected=info.selected
                }
            })
            //把最新的 所有的购物车商品的状态保存到 store 中去
            localStorage.setItem('car',JSON.stringify(state.car))
        }
    },
    //相当于计算属性，也相当于过滤器
    getters:{//this.$store.getters.***
        getAllCount(state){
            var c=0;
            state.car.forEach(item=>{
                c += item.count
            })
            return c;
        },
        getGoodsCount(state){
            var o={};
            state.car.forEach(item=>{
                o[item.id]=item.count
             })
             return o
        },
        getGoodsSelected(state){
            var o={}
            state.car.forEach(item=>{
                o[item.id]=item.selected
            })
            return o
        },
        getGoodsCountAndAmount(state){
            var o={
                count:0,//勾选数量
                amount:0//勾选总价
            }
            state.car.forEach(item=>{
                if(item.selected){
                    o.count+=item.count;
                    o.amount+=item.price*item.count
                }
            })
            return o
        }
    }
})
import moment from 'moment'
//定义全局过滤器
Vue.filter("dateFormat",function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
    //如果直接调用表示当前时间 moment()
    return moment(dataStr).format(pattern)
})
//安装图片预览插件
import VuePreview from 'vue-preview'
// defalut install
Vue.use(VuePreview)
// Vue.use(preview, {
//     mainClass: 'pswp--minimal--dark',
//     barsSize: {top: 0, bottom: 0},
//     captionEl: false,
//     fullscreenEl: false,
//     shareEl: false,
//     bgOpacity: 0.85,
//     tapToClose: true,
//     tapToToggleControls: false
//   })

//2.1 导入vue-resource
import VueResource from 'vue-resource'
//2.2 安装vue-resource
Vue.use(VueResource)
//设置请求根路径
Vue.http.options.root = "http://*****.**";
//全局设置post 时候表单数据格式组织形式
Vue.http.options.emulateJSON = true;
//导入mui
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'


// //导入所有的 Mint-UI组件
// import MintUI from 'mint-ui'
// //可以省略掉node_modules这一层目录
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI);

//按需导入组件
// import {Button} from 'mint-ui'
//使用Vue.component 注册按钮组件
// Vue.component(Button.name,Button)//Button.name就是组件名称（mt-button ）

import { Header,Swipe, SwipeItem ,Lazyload,Button,Switch} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Switch.name, Switch);

Vue.use(Lazyload);
//导入App根组件
import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c=>c(app),
    router,//1.4挂载路由对象到实例vm
    store//挂载store状态管理工具
})