# 带音乐平台项目文档

#### 开发人员：

前端：蔡寒均，江家喜

后台：陈霁璇，肖志强，王啸川，张子琦

#### 技术栈：

前端：Vue＋ElementUI+restful API

后台：

## 一、项目需求

## 前端

### 歌曲显示

- 分类显示最新的10首歌曲
- 按类别分页显示各类歌曲

### 上传下载

- 上传歌曲
- 下载歌曲

### 播放搜索

- 搜索歌曲

- 连续播放歌曲
- 试听歌曲并同步显示歌词

### 排行榜

- 试听排行
- 下载排行

#### 歌曲评论

## 后台

### 分页显示歌曲列表

### 多条件查询歌曲

### 添加歌曲

- 检测歌曲是否添加
- 上传歌曲文件
- 上传歌词文件
- 保存歌曲信息

### 资源信息采集

- 收集URL种子
- 爬虫配置
- 网页抓取

## 二、数据库设计

- 用户表
- 歌曲表
- 歌单表
- 专辑表
- 歌曲标签表
- 评论表

## 三、API接口设计

参数说明：

- ?wd=：搜索字段

- ?limit=10：指定返回记录的数量
- ?offset=10：指定返回记录的开始位置
- /:id：指定内容的id

#### 主页

> GET		/hot/albums?limit=		获得热门专辑		
>
> GET		/hot/playlists?limit=		获得热门歌单
>
> GET		/hot/songs?limit=		获得热门歌曲
>
> GET		/hot/singers?limit=		获得热门歌手

#### 搜索结果页

> GET		/search?wd=&limit=&offset=		搜索

#### 专辑详情页

> GET		/album?a_id=		获得某一张唱片的信息		
>
> GET		/album/songs?a_id=&limit=&offset=		获得某一张唱片的歌曲
>
> GET		/album/comments?a_id=&limit=&offset=		获得某一张唱片的评论

#### 歌单详情页

> GET		/playlist?p_id=		获得某一张歌单的信息
>
> GET		/playlist/songs?p_id=&limit=&offset=		获得某一张歌单的歌曲
>
> GET		/playlist/comments?p_id=&limit=&offset=		获得某一张歌单的评论

#### 播放页

> GET		/song/?s_id=		获得某首歌曲
>
> GET		/song/comments?s_id=&limit=&offset=		获得某首歌曲的评论

#### 登录注册

> GET			/login		获取登录态
>
> POST		/login		登录
>
> ```javascript
> //发送表单内容
> {
>     account:""
>     password:""
> }
> //回复内容
> //登录成功回复user信息
> //账号正确密码错误回复'1'
> //账号不存在回复'2'
> ```
>
> 
>
> POST		/register			注册
>
> ```js
> //发送表单内容
> {
>     account:"",
>     password:"",
> }
> 
> ```
>
> 

#### 个人主页

> GET		/user/likes?u_id=&limit=&offset=		获得用户收藏的歌曲
>
> GET		/user?u_id=		获得某个用户的个人信息

#### 上传下载

> POST		/upload		上传
>
> GET			/download		下载

#### 评论

>POST			/album/comment			评论专辑
>
>```js
>//body内容
>{
>    a_id:"",
>    u_id:"",
>    content:""
>}
>```
>
>POST			/playlist/comment		评论歌单
>
>```js
>//body内容
>{
>    p_id:"",
>    u_id:"",
>	content:""
>}
>```
>
>POST			/song/comment			评论歌曲
>
>```js
>//body内容
>{
>    s_id:"",
>    u_id:"",
>    content:""
>}
>```

#### 添加

>POST			/user/song			添加歌曲
>
>```js
>//body内容
>{
>    u_id:"",
>    s_id:""
>}
>```
>
>POST			/user/playlist			添加歌单
>
>```js
>//body内容
>{
>    u_id:"",
>    p_id:""
>}
>```



## 四、前端页面设计
- 主页
- 歌曲播放页
- 搜索详情
- 个人主页
- 唱片详情
- 专辑详情




