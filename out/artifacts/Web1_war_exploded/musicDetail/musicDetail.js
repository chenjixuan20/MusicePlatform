let app=new Vue({
    el:"#app",
    data:{
        current_lrc:0,
        lrc:[],
        lrc_time:[],
        comment_textarea:"",
        user_pic_url:"http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50",
        song:{
            },
        comments:[
            {
                user_name:"地狱的深海巨兽",
                img_url:"http://p1.music.126.net/tsiAFgtel-UR4HhqaD9CpA==/109951163369024323.jpg?param=50y50",
                content:"每一首都很好听，超喜欢。每一首都很好听，超喜欢。",
                create_date:"5月26日 06:57",
                likes:"21"

            },
            {
                user_name:"关机大魔王",
                img_url:"http://p1.music.126.net/GU2MEdzuwyXvfVt3-dTK2g==/109951163095495030.jpg?param=50y50",
                content:"菲律宾网红吧...我觉得或许是",
                create_date:"5月27日 08:12",
                likes:"37"

            },
            {
                user_name:"版泉sao的网易",
                img_url:"http://p1.music.126.net/dSmu4ZZoCnJDdvQlOiRI3g==/19040242858348690.jpg?param=50y50",
                content:"哎，我看到不是999+一般喜欢跳过",
                create_date:"5月28日 12:07",
                likes:"31"

            },
            {
                user_name:"缪泽客",
                img_url:"http://p1.music.126.net/YZxL6aNc_Ovx75SRjOwBPA==/2537672838261836.jpg?param=50y50",
                content:"堂堂一个音乐软件，让我下的图片比音乐还多可还行",
                create_date:"5月30日 06:42",
                likes:"251"

            },
            {
                user_name:"偏科的傲娇小橘猫",
                img_url:"http://p1.music.126.net/et2lHN9nEc0a_driAPy2cA==/109951163326964648.jpg?param=50y50",
                content:"坐等🔥",
                create_date:"6月10日 07:27",
                likes:"81"

            },
            {
                user_name:"整个森林的蘑菇",
                img_url:"http://p1.music.126.net/wIss2a5FJJLtBlaQAzz_RQ==/109951163112627226.jpg?param=50y50",
                content:"tobu是不是女孩子！",
                create_date:"6月17日 17:67",
                likes:"3"

            }
        ],
        fans:[
            {
                user_id:"",
                img_url:"http://p1.music.126.net/f6FVs9JCQBMwWrehU2X4Yg==/6653144859732467.jpg?param=50y50"
            },
            {
                user_id:"",
                img_url:"http://p1.music.126.net/ma8NC_MpYqC-dK_L81FWXQ==/109951163250233892.jpg?param=50y50"
            },
            {
                user_id:"",
                img_url:"http://p1.music.126.net/ZA0tMnhWckMgRN9vgOxKhg==/109951163206890813.jpg?param=50y50"
            },
            {
                user_id:"",
                img_url:"http://p1.music.126.net/gC9RDO7oe_03M0c5_22A5g==/19186477904860461.jpg?param=50y50"
            },
            {
                user_id:"",
                img_url:"http://p1.music.126.net/OFldhxegq9kJAGH2XQ3RHg==/109951163264354085.jpg?param=50y50"
            },
            {
                user_id:"",
                img_url:"http://p1.music.126.net/mEQcWCyj52W9U4lc8ppKGw==/109951163253151745.jpg?param=180y180"
            },
            {
                user_id:"",
                img_url:"http://p1.music.126.net/St1wJw25Sb4ZbXg_3pubYw==/109951163392450850.jpg?param=50y50"
            },
            {
                user_id:"",
                img_url:"http://p1.music.126.net/r7SQVMlsgGZEx38AU_hGEw==/7959364674684915.jpg?param=50y50"
            }
        ]
        ,
        // form
        user: null,
        loginFormVisible: false,
        formLabelWidth: '40px',
        search_wd: "",
        login_form: {
            account: '',
            password: ''
        },
        registerFormVisible: false,
        register_form: {
            account: "",
            password: "",
            password_repeat: "",
            verification_code: ""
        },
        // nav
        menu_active_index: '1'
    },
    created:function () {

        console.log("进入歌曲播放的生命周期函数")
        let that = this
        if(user=JSON.parse(sessionStorage.getItem("bigmusic_user"))){
            console.log(user)
            that.user = {
                id: user.id,
                name: user.name,
                img_url: user.img_url
            };
        }

        let id=GetQueryString("id");
        axios.get('/song', {
            params: {
                s_id: id
            }
        })
            .then(function (response) {
                let data = response.data;
                that.song=formatSong(data[0]);
                that.lrc=fomatLrc(that.song.song_lrc,1)
                that.lrc_time=fomatLrc(that.song.song_lrc,2)
                console.log(that.song)
                console.log(data)
                console.log(that.song)
                console.log("获取歌曲成功");

            })
            .catch(function (error) {
                console.log("获取歌曲失败");
            });
        axios.get('/song/comments', {
            params: {
                s_id: id
            }
        })
            .then(function (response) {
                let data = response.data;
                console.log(data)
                that.comments=data.map(formatComment)

            })
            .catch(function (error) {
                console.log("获取歌曲失败");
            });

    },
    methods:{
        search: function () {
            console.log("搜索")
            window.location.href = "../searchResults/searchResults.html?" + `search_wd=${this.search_wd}`
        },
        login: function () {
            let that = this
            //TODO 发送请求后台如果密码正确
            //let bigMusic = JSON.parse(localStorage.getItem("bigmusic")) || [];
            let param = new URLSearchParams()
            param.append('account', that.login_form.account)
            param.append('password',that.login_form.password )
            axios.post('/login', param)
                .then(function (response) {
                    console.log(response);
                    if(response.data.Status){
                        let status=response.data.Status
                        if(status==1){
                            that.$message({
                                message: '密码错误！请重新输入密码。',
                                type: 'error',
                                duration: 2000
                            });
                        }else if(status==2){
                            that.$message({
                                message: '错误！此账户不存在。',
                                type: 'error',
                                duration: 2000
                            });
                        }

                    }
                    if(response.data[0].account){
                        let user=response.data[0]
                        that.user = {
                            id: user.userId,
                            name: user.userName,
                            img_url: user.photo
                        };
                        sessionStorage.setItem('bigmusic_user',JSON.stringify(that.user))
                        that.login_form= {
                            account: '',
                            password: ''
                        }
                        that.loginFormVisible=false
                        setTimeout(function () {
                            that.$message({
                                message: '登录成功！',
                                type: 'success',
                                duration: 2000
                            });
                        }, 100)
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });

        },
        register: function () {
            let that = this
            if (that.register_form.password == that.register_form.password_repeat) {
                let param = new URLSearchParams()
                param.append('account', that.register_form.account)
                param.append('password',that.register_form.password )
                let user = {
                    account: that.register_form.account,
                    password: that.register_form.password
                }
                console.log(user)
                axios.post('/register',param)
                    .then(function (response) {
                        console.log(response);
                        let status=response.data.Status;
                        if(status==0){
                            that.$message({
                                message: '错误！此账号已经注册过。',
                                type: 'error',
                                duration: 2000
                            });
                            that.register_form = {
                                account: that.register_form.account,
                                password: "",
                                password_repeat: "",
                                verification_code: ""
                            }
                        }else if(status==1){
                            that.registerFormVisible = false;
                            that.register_form = {
                                account: "",
                                password: "",
                                password_repeat: "",
                                verification_code: ""
                            }
                            setTimeout(function () {
                                that.$message({
                                    message: '注册成功，去登录吧！',
                                    type: 'success',
                                    duration: 2000
                                });
                            }, 100)
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                //let bigMusic = JSON.parse(localStorage.getItem("bigmusic")) || [];

                //bigMusic.push(user)
                //TODO 提交到后台
                //localStorage.setItem('bigmusic', JSON.stringify(bigMusic));

                //成功
            } else {
                that.$message({
                    message: '错误！前后两次密码输入不同。',
                    type: 'error',
                    duration: 2000
                });
            }


        },
        toRegisterORLogin: function (type) {
            let that = this;
            if (type == "Login") {
                that.registerFormVisible = false;
                setTimeout(function () {
                    that.loginFormVisible = true;
                }, 200)
            }
            else if (type == "Register") {
                that.loginFormVisible = false;
                setTimeout(function () {
                    that.registerFormVisible = true;
                }, 200)
            }
        },
        handleCommand: function (command) {
            if (command == "logout") {
                this.user = null;
                sessionStorage.removeItem("bigmusic_user")
                this.$message({
                    message: '登出成功！',
                    type: 'success',
                    duration: 1000
                });
            }
            if (command == "homepage") {
                window.location.href = "../homePage/homePage.html?type=mine&id=" + this.user.id
            }

        },
        lrc_control:function (index) {
            let current_index=this.current_lrc
            if(current_index<6){
                return true;
            }else {
                if (index<=(current_index+6)&&index>current_index-6) {
                    return true;
                }
                return false;
            }

        },
        newComment:function () {
            console.log("jrxpl")
            let that=this
            if(that.user!=null){
                let id=GetQueryString("id");

                let param = new URLSearchParams()
                param.append('s_id', id)
                param.append('u_id',that.user.id )
                param.append('content',that.comment_textarea )

                axios.post('/song/comments', param)
                    .then(function (response) {
                        console.log(response);
                        let user=that.user
                        let status;
                        if(status=response.data.Status){
                            if(status==1){
                                that.comments.push({user_name:user.name,
                                    img_url:user.img_url,
                                    content:that.comment_textarea,
                                    create_date:"2018年7月11日 10:57",
                                    likes:"21"})
                                that.comment_textarea=''
                            }
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }else {
                that.$message({
                    message: '错误！请先登陆。',
                    type: 'error',
                    duration: 2000
                });
            }

        }
    }

})

function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)
        return  decodeURI(r[2]);
    return null;
}
function formatComment(comment) {
    let comment_f={
        user_name:comment.userName,
        img_url:comment.photo,
        content:comment.comment,
        create_date:comment.date,
        likes:"21"
    }
    return comment_f
}
function formatSong(song) {
    let song_f={
        name:song.songName,                          //歌名
        singer:song.singerName,                    //歌手名
        album:song.albumName,                         //专辑名
        collect_count:13,                    //收藏量
        download_count:22,                   //下载量
        play_count:34,                      //播放次数
        ablum_picture_src:song.photo,
        song_bar:'90',
        song_alltime:'03:58',
        song_realtime:"02:20",
        song_src:`http://music.163.com/song/media/outer/url?id=${song.song_url}.mp3`,
        song_lrc:song.lyric.lrc.lyric
    }
    return song_f
}

/*---------歌词模块：显示歌词，滚动歌词*/
/*将歌词拼成p标签*/
        //var myMusic 自定义一个变量 myMusic来存储audio标签元素
        // 在 document 文档下通过ID名获取元素（document.getElementById（））
function fomatLrc(lyric,type) {
    //let lyric="[00:00.07]词：徐秉龙／川与屿笙[00:04.07]作曲：徐秉龙[00:10.99]夏天白昼明治的红豆 [00:15.30]一口沁甜了倦意感受 [00:19.79]有风经过海面上踟蹰 [00:24.13]倏尔带走你梦里的忐忑  [00:28.50]可嗅到仲夏柠叶香 [00:31.09]你莞尔的笑 [00:32.94]身旁青色的柠檬微荡 [00:36.99]我明了害羞地彷徨 [00:39.46]仿若青柠的悠扬 [00:41.82]到达直通你心门的方向 [00:46.14]可嗅到仲夏柠叶香 [00:48.95]你莞尔的笑 [00:50.65]身旁青色的柠檬微荡 [00:54.81]我明了害羞地彷徨 [00:57.24]仿若青柠的悠扬 [00:59.68]到达直通你心门的方向 [01:35.58]冰镇可乐甜甜的芒果 [01:39.77]一口拥抱全世界降落 [01:44.34]有种诱惑起个名字叫菠萝 [01:48.52]看看你梦里有没有七彩虹 [01:52.92]可嗅到仲夏柠叶香 [01:55.49]你莞尔的笑 [01:57.28]身旁青色的柠檬微荡 [02:01.44]我明了害羞地彷徨 [02:03.87]仿若青柠的悠扬 [02:06.18]到达直通你心门的方向 [02:10.59]可嗅到仲夏柠叶香 [02:13.37]你莞尔的笑 [02:15.07]身旁青色的柠檬微荡 [02:19.39]我明了害羞地彷徨 [02:21.74]仿若青柠的悠扬 [02:24.08]到达直通你心门的方向 [02:29.48]夏天白昼 [02:33.92]有风经过 [02:38.42]我明了你害羞的彷徨 [02:41.66]可嗅到仲夏柠叶香 [02:46.18]可嗅到仲夏柠叶香  [02:49.20]你莞尔的笑 [02:50.70]身旁青色的柠檬微荡 [02:54.81]我明了害羞地彷徨 [02:57.27]仿若青柠的悠扬 [02:59.59]摘下星星戴上你的肩膀"
    let lrc_f=[]
    let times_f=[]

    var lrc = lyric.split("[");//获取歌词并从[切割开,并记录[前的信息(到前一个[为止),并形成一个数组
    for(var i = 0;i<lrc.length;i++){

        var arr = lrc[i].split("]");//再次切割将时间和歌词分割开
        // console.log(arr[0]);
        //将上面切割出来的歌词时间进行切割
        var times = arr[0].split(".");
        // console.log(times[0]);
        var time  = times[0].split(":");
        // console.log(time);
        //将00:00转换为秒钟
        var ct = time[0]*60+time[1]*1;//将time[0]和time[1]字符转换成数字再相加
        // console.log(ct);
        if(i!=0){
            times_f.push(ct)
            lrc_f.push(arr[1])
        }

    }
    if(type==1){
        return lrc_f;
    }else {
        return times_f
    }

    // con.innerHTML = html;//把歌词内容添加到歌词盒子
    // var aP = document.getElementsByTagName("p");//获得所有的p标签
    // var n = 0;
    //
    //

}
document.getElementById("myMusic").addEventListener("timeupdate",function(){
    //输出当前时间
    console.log(parseInt(this.currentTime)); //parseInt()--取整，丢弃小数部分，保留整数部分
    var cur = parseInt(this.currentTime);//存储当前时间
    var time=app._data.lrc_time
    let index=time.findIndex(function (value,index) {
        return value==cur
    });
    if(index!=-1){
        app._data.current_lrc=index
        console.log("current"+app._data.current_lrc)
    }


});