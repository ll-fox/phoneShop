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
## 改造新闻资讯路有链接
## 新闻资讯 页面制作
1. 绘制页面，使用MUI 中的 media-list.html
2. 使用vue-resource 获取数据
3. 渲染真实数据
* 注意： 图片标签 src 属性前要加 ：src
## 实现新闻资讯列表，点击跳转到新闻详情
1. 把列表中的每一项都改造为router-link ，同时，在跳转的时候应该提供唯一的标识符
2. 创建新闻详情的组件页面 NewsInfo.vue
3. 在路由模块中，讲新闻详情的路由地址和组件对应起来
## 实现 新闻详情 的 页面布局 和 数据渲染 

## 单独封装一个comment.vue评论子组件
1. 先创建一个单独的 comment.vue 组件模板
2. 在需要使用 comment 组件的页面中，先手动 导入 comment组件
+ 'import comment form "./comment.vue"'
3. 在父组件中，使用'components'属性，将刚才导入 comment 组件，注册为自己的子组件
4. 将注册子组件时候的，注册名称，以 标签形式，在页面中引用即可


## 获取所有的评论数据显示到页面中

## 实现点击加载更多评论的功能
1. 为加载更多按钮，绑定点击事件，在事件中，请求下一页数据
2. 点击加载更多，让pageIndex++ ， 然后重新调用 this.getComents（）方法重新获取新一页数据
3. 为了防止新数据 覆盖老数据情况，我们在 点击加载更多的时候，每当获取到新的数据，应该让 老数据调用数组的concat 方法，拼接上新数组

## 发表评论
1. 把文本框做双向数据绑定
2. 为发表按钮绑定一个事件
3. 评论内容是否为空校验，如果为空，则Toast提示用户 评论内容不能为空
4. 通过vue-resource发送一个请求，把评论内容提交给 服务器
5. 当发表评论OK后，重新刷新列表，查看最新评论
+ 如果调用getComments 方法重新刷新评论列表的话，可能只能得到最后一页评论，前几页的评论获取不到
+ 换一种思路：当评论成功后，在客户端，手动拼接处一个最新的评论对象，然后调用数组的unshift方法，吧最新评论，追加到data中comments的开头，这样 完美实现刷新评论列表的需求；

## 改造图片分析 按钮为 路由的链接并显示对应的组件页面