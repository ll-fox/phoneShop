# 这是一个电商项目
[主流开源协议之间有何异同？]
(https://blog.csdn.net/xiaodaima2016/article/details/83645854)
## 制作首页App组件
1. 完成Header区域，使用的是Mint-UI中的Header组件
2. 制作底部Tabbar区域，使用的是MUI的Tabbar.html
+ 在制作 购物车 小图标的时候，操作会相对多一些
+ 先把 扩展图标的 css 样式，拷贝到 项目中
+ 拷贝 扩展字体库 ttf文件，到项目中
+ 为 购物车 小图标，添加 如下样式 "mui-icon mui-icon-extra mui-icon-extra-cart"
3. 要在 中间区域放置一个 router-view 来显示路由匹配到的组件
## 改造tabber 为 router-link（将a标签改为router-link）
## 设置路由高亮
1. 找到高亮的类
2. 在路由模块中添加
>  linkActiveClass: 'mui-active'//覆盖路由高亮的类，默认的类叫做router-link-active
## 点击tabbar中的路有链接，展示对应的路由组件
## 制作首页轮播图
## 加载首页轮播图数据
1. 获取数据，如何获取，使用Vue-resource
> 装包： yarn add vue-resource
2. 使用vue-resource的 this.$http.get获取数据
3. 获取得到数据保存到data上
4. 使用 v-for 循环渲染每个 item 项
## 改造九宫格区域的样式