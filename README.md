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

## 绘制图片列表 组件页面的结构并美化
1. 制作顶部的滑动条
2. 制作底部的图片列表
### 制作顶部滑动条的坑们；
1. 需要借助于MUI中的 tab-top-webview-main.html
2. 需要把 slider区域的 mui-fullscreen 类去掉
2. 滑动条无法正常触发滑动，通过检查官方文档，发现这是一个js组件，需要被初始化一下
+ 导入mui.js
+ 调用官方提供的方式与初始化：
```
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
```
4. 我们在初始化 滑动条的时候，导入的 mui.js ,但是，控制台报错：“Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them”
+ 经过我们合理的推测，可能是mui.js中使用到了 'caller', 'callee', and 'arguments' 东西，但是webpack 打包好的 bundle.js 中，默认是启用严格模式的，所以，这两者冲突了；
+ 解决方案：1.把mui.js中的非严格模式代码改掉；但是不现实；2. 把webpack 打包时候的严格模式禁用掉
+ 最终，我们选择了 第二个 方案，移除严格模式：使用这个插件 "babel-plugin-transform-remove-strict-mode"
5. 刚进入图片分享页面的时候，滑动条无法正常工作，经过我们认真的分析，发现，如果要初始化 滑动条，必须要等 DOM 元素加载完毕，所以，我们把 初始化滑动条 的代码，搬到了mounted 生命周期函数中
6. 当滑动条 调试OK后 ，发现，tabber无法正常工作了，这时候，我们需要把每个 tabber 按钮的样式中 "mui-tab-item" 改一下名字
7. 获取所有分类，并渲染 分类列表
## 制作图片列表区域
1. 图片列表使用懒加载技术，我们可以使用 Mint.ui 提供的现成的 组件 'lazy-load'
2. 根据'lazy-load'的使用文档，尝试使用
3. 渲染图片列表数据

### 实现了 点击图片 跳转到图片详情页面

## 实现了 点击图片 跳转到 图片详情页面
1. 在改造li成 router-link 的时候，需要使用 tag 属性 指定要渲染为 哪种元素

## 实现详情页面的布局和美化，同时获取数据渲染页面

## 实现图片详情中缩略图功能
1. 使用插件 vue-preview 这个缩略图插件
2. 获取到所有的图片列表，然后使用 v-for 指令渲染数据

3. 注意：img 标签上的class不能去掉
4. 注意：每个图片数据中，必须有w 和 h 属性

## 绘制商品列表 页面基本结构并美化

## 常是在手机上，去进行项目的预览和测试
1. 要保证自己的手机可以正常运行；
2. 要保证手机和开发项目的电脑 处于同一个WIFI环境中，也就是说手机可以访问到电脑的IP
3. 打开自己的 项目中 package.json文件，在dev脚本中，添加一个--host指令，把当前电脑的 WIFI IP地址，设置为--host的指令值。
+ 如何查看自己电脑所处WIFI 的IP 呢？在cmd 终端运行‘ipconfig’，查看无线网的ip地址
## 两种网页跳转方式
### 方式一：使用a标签的形式 叫做 标签跳转
### 方式二：使用window.location.href的形式，叫做编程式跳转（导航）
> 使用js的形式进行路由导航
1. 一定要区分 this.$route 和 this.$router 这两个对象，
2. 其中：this.$route 是路由【参数对象】，所有路由的参数，params ，query 都属于它
3. 其中： this.$router 是一个路由【导航对象】，用它 可以方便的 使用JS代码，实现路由的前进，后退，跳转到新的URL地址
```
//1.最简单的
this.$router.push('/home/goodsinfo/'+id)
//2.传递对象
this.$router.push({path:'/home/goodsinfo/'+id'})
//3.传递命名的路由
this.$router.push({ name:"goodsinfo",params:{id} })
```
## 如何实现再加入购物车的时候，拿到选择的数量
1. 经过分析：按钮属于 goodsinfo页面，数字属于 numberbox组件
2. 由于涉及到父子组件的嵌套，所以，无法直接在 goodsinfo页面中获取到商品的数量值 
3. 怎么解决问题？：涉及到子组件向父组件传值（时间调用机制）
4. 事件调用的本质：父向子传递方法，同时把 数据当做参数 传递给这个方法