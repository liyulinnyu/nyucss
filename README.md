# NYUCSS
NYU Cascading Style Sheets

这是属于nyu的级联样式表，这里只是简单的样式介绍，更多的细节内容，之后会以在线文档教程的形式出现。


## 按钮样式
1. 按钮大小分为：
   大，正常，小，超小四种风格，没有固定高宽，随字体而变（继承bootstrap）

![image](https://github.com/liyulinnyu/Myimg/blob/master/nyu-button-def.png)

2. 颜色分为：
   紫色，深紫色，鹅黄色，蓝色，粉红，橘红，红色，灰色
3. 样式分为：
   ① 满色，hover时会有透明度改变
   ② 背景白，hover时变为满色

![image](https://github.com/liyulinnyu/Myimg/blob/master/nyu-button.png)

4. 加入了按钮加载样式，即可用于等待数据载入时的效果。目前只支持紫色的情况。

![image](https://github.com/liyulinnyu/Myimg/blob/master/nyu-button-loading.png)

## 输入框样式

前置icon样式，分为小，正常，大三种：

![image](https://github.com/liyulinnyu/Myimg/blob/master/next-input.png)

后置icon样式，分为小，正常，大三种：

![image](https://github.com/liyulinnyu/Myimg/blob/master/pre-input.png)


## 单选框，复选框样式

用了nyucss中的青蓝色样式，更加美观易用。

![image](https://github.com/liyulinnyu/Myimg/blob/master/nyu-radiocheckbox.png)

## 搜索框样式
两种搜索框样式，浅色和深色，应用于不同背景，同时还有宽度拉长动画（见源码注释）

![image](https://github.com/liyulinnyu/Myimg/blob/master/nyu-search.png)

## 轮播图样式

更加方便美观地做出适配所有屏幕的轮播图效果，非等比例式适配浏览器伸缩。您只要设置三个值即可：
1. 整体轮播屏的高度（如果需要的话，默认为最小高度）
2. 要轮播的图片
3. 左右控制按钮填充样式

![image](https://github.com/liyulinnyu/Myimg/blob/master/carousel.png)

## Nav样式

比bootstrap更加简洁易用，没有多余的各种代码限制，目前只支持单极nav
（没有限制nav高宽，需要您在外层添加限制。）

![image](https://github.com/liyulinnyu/Myimg/blob/master/nyu-nav.png)

## 分页样式
目前共有两种分页样式，分别是类bootstrap和全色。每种样式都有小，正常，大三种size。

① 第一种分页样式：

![image](https://github.com/liyulinnyu/Myimg/blob/master/nyu-pagination-1.png)

② 第二种分页样式：

![image](https://github.com/liyulinnyu/Myimg/blob/master/nyu-pagination-2.png)

## 弹窗

最简单的弹窗效果，用于用户提示等等。用百分比方式规定宽度，可以结合背景虚化或者暗背景使用

![image](https://github.com/liyulinnyu/Myimg/blob/master/nyu-alert.png)

## 提交成功弹窗

当用户提交信息成功时，可以触发这个弹窗样式

![image](https://github.com/liyulinnyu/Myimg/blob/master/nyu-alert-success.png)

## 提交失败弹窗

当用户提交信息失败时，可以触发这个弹窗样式

![image](https://github.com/liyulinnyu/Myimg/blob/master/nyu-alert-fail.png)

## 图片处理
加入了IE12+支持的图片处理效果，同时分类加入了hover的效果可用于图片的特效，例如下图共有12种图片效果，分别为：
原始图片，加入灰白效果，老照片效果，增加饱和度，色相反转，胶卷底片效果，背景变暗，背景高亮，对比度增强，背景模糊（毛玻璃效果）,泛黄饱和度，高亮对比度：

![image](https://github.com/liyulinnyu/Myimg/blob/master/nyu-img-ex.png)


## 载入动画

增加了几个等待载入动画效果， 具体结构可以看源码或者后续教程

① 第一种载入动画有大，正常，小三种可以选择

![image](https://github.com/liyulinnyu/Myimg/blob/master/nyu-loading-1.png)

② 第二种动画运用box-shadow， 不宜放大使用，所以只有一种选择

![image](https://github.com/liyulinnyu/Myimg/blob/master/nyu-loading-2.png)

## 自动打字效果

这种效果可以用js简单实现，但此处用了纯css，js只是做了计算字数的简单工作。效果更佳，渲染更快，唯一不足是目前仅支持中文打字效果。

![image](https://github.com/liyulinnyu/Myimg/blob/master/nyu-typing.png)

## Versioning

Version: 1.0

## Authors

* **Yulin Li** - *Initial work* - [Yulin's blog](https://liyulinnyu.github.io)

## Contact me

If you want to contact me, please email me: yl4832@nyu.edu

## Final words

* If you have some advices, please contact me.
* Have a nice day!
