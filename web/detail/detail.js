new Vue({
    el:"#app",
    data:{// form
        user: null,
        loginFormVisible: false,
        formLabelWidth: '40px',
        search_wd: "",
        login_form: {
            account: '',
            password: '',
        },
        registerFormVisible: false,
        register_form: {
            account: "",
            password: "",
            password_repeat: "",
            verification_code: ""
        },
        // nav
        menu_active_index: '1',


        isPlaylist:true,
        comment_textarea:"",
        playlist:{
            // title:"韵律中邂逅惊艳女嗓，美到心醉",
            // play_count:6324,
            // collect_count:511,
            // download_count:322,
            // create_date:"2018-05-14",
            // img_url:"http://p3.music.126.net/2-04ThxCahYBMbkXzFHwfw==/19161189137853511.jpg?param=200y200",
            // introduction:"五月，会有始料不及的运气，会有突如其来的欢喜，放空的心，是最好的礼物； 独走的路，是最美的风景；好听的女声那么多，而我却偏偏喜欢你。♥这么好听的女声你确定要错过？",
            // author:{
            //     name:"南三号",
            //     img_url:"http://p1.music.126.net/0btwtKKf0L162zX2WKQbBQ==/109951163379831126.jpg?param=40y40"
            // },
            // tags:["欧美","流行","电子"]
        },
        album:{
            // title:"渐渐",
            // play_count:6324,
            // collect_count:511,
            // download_count:322,
            // publish_date:"2018-05-14",
            // publish_company: "环球唱片",
            // img_url:"http://p3.music.126.net/SGRNxyeA6_43M8oB0TuqrQ==/109951163370531309.jpg?param=177y177",
            // introduction:"陈奕迅(Eason)在2010-2012年间举行《DUO》世界巡回演唱会时，希望完成世界巡演后，一班演唱会成员可以共同创作一张专辑，作为团队大家庭之间的一次珍贵留念。事隔几年，这个愿望终于在今年成真，将会推出以「爱」为出发的专辑《L.O.V.E.》，将这段和团队的美好时光透过这张专辑记录下来，每一首歌都是一份来自Eason的「爱」。",
            // singer:{
            //     id:"",
            //     name:"陈奕迅",
            // }
        },
        songs:[
            // {
            //     id:2,
            //     title:"Safe ",
            //     duration:"03:20",
            //     album:{
            //         id:"1",
            //         name:"Safe"
            //     },
            //     singer:{
            //         id:1,
            //         name:"Daya"
            //     }
            // },
            // {
            //     id:2,
            //     title:"Only You",
            //     duration:"03:09",
            //     album:{
            //         id:"1",
            //         name:"Safe"
            //     },
            //     singer:{
            //         id:1,
            //         name:"Daya"
            //     }
            // },{
            //     id:2,
            //     title:"You",
            //     duration:"03:20",
            //     album:{
            //         id:"1",
            //         name:"Safe"
            //     },
            //     singer:{
            //         id:1,
            //         name:"Daya"
            //     }
            // },{
            //     id:2,
            //     title:"Need You Right Now",
            //     duration:"03:25",
            //     album:{
            //         id:"1",
            //         name:"Safe"
            //     },
            //     singer:{
            //         id:1,
            //         name:"Daya"
            //     }
            // },{
            //     id:2,
            //     title:"Cruel",
            //     duration:"03:31",
            //     album:{
            //         id:"1",
            //         name:"Safe"
            //     },
            //     singer:{
            //         id:1,
            //         name:"Daya"
            //     }
            // },{
            //     id:2,
            //     title:"Horizon",
            //     duration:"03:00",
            //     album:{
            //         id:"1",
            //         name:"Safe"
            //     },
            //     singer:{
            //         id:1,
            //         name:"Daya"
            //     }
            // },{
            //     id:2,
            //     title:"Your Place or Mine",
            //     duration:"03:14",
            //     album:{
            //         id:"1",
            //         name:"Safe"
            //     },
            //     singer:{
            //         id:1,
            //         name:"Daya"
            //     }
            // },
            // {
            //     id:2,
            //     title:"California",
            //     duration:"03:20",
            //     album:{
            //         id:"1",
            //         name:"Safe"
            //     },
            //     singer:{
            //         id:1,
            //         name:"Daya"
            //     }
            // }
            // ,{
            //     id:2,
            //     title:"Big Words",
            //     duration:"03:16",
            //     album:{
            //         id:"1",
            //         name:"Safe"
            //     },
            //     singer:{
            //         id:1,
            //         name:"Daya"
            //     }
            // }
            // ,{
            //     id:2,
            //     title:"Because Of You",
            //     duration:"04:01",
            //     album:{
            //         id:"1",
            //         name:"Safe"
            //     },
            //     singer:{
            //         id:1,
            //         name:"Daya"
            //     }
            // }
        ],
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

        }
    },
    created:function () {
        let that = this
        if(user=JSON.parse(sessionStorage.getItem("bigmusic_user"))){
            console.log(user)
            that.user = {
                id: user.id,
                name: user.name,
                img_url: user.img_url
            };
        }

        let type=GetQueryString("type");
        let id=GetQueryString("id");
        if(type=="playlist"){
            this.isPlaylist=true;
        }else {
            this.isPlaylist=false;
        }
        if(this.isPlaylist){

            //访问后台得到playlist的数据
            axios.get('/playlist', {
                params: {
                    p_id: id
                }
            })
                .then(function (response) {
                    let data = response.data;
                    that.playlist=formatPlaylist(data[0]);
                })
                .catch(function (error) {
                    console.log("获取歌单失败");
                });
            //获得歌单的歌曲
            axios.get('/playlist/songs', {
                params: {
                    p_id: id
                }
            })
                .then(function (response) {
                    let data = response.data;
                    that.songs=data.map(formatSong);
                    console.log("获取专辑的歌曲成功");
                })
                .catch(function (error) {
                    console.log("获取专辑的歌曲失败");
                });

        }else {
            //获得album的数据
            axios.get('/album', {
                params: {
                    a_id: id
                }
            })
                .then(function (response) {
                    let data = response.data;
                    that.album=formatAlbum(data[0]);
                })
                .catch(function (error) {
                    console.log("获取专辑失败");
                });
            //获得专辑的歌曲
            axios.get('/album/songs', {
                params: {
                    a_id: id
                }
            })
                .then(function (response) {
                    let data = response.data;
                    console.log(data)
                    console.log(formatSong(data[0]))
                    that.songs=data.map(formatSong);
                    console.log(that.songs)
                    console.log("获取专辑的歌曲成功");
                })
                .catch(function (error) {
                    console.log("获取专辑的歌曲失败");
                });

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
function formatPlaylist(playlist) {
    let playlist_f={
        title:playlist.playlistName,
        play_count:playlist.song_count,
        collect_count:511,
        download_count:322,
        create_date:playlist.creat_time,
        img_url:playlist.photo,
        introduction:playlist.introduction,
        author:{
            name:playlist.creator_id,
            img_url:"http://p1.music.126.net/0btwtKKf0L162zX2WKQbBQ==/109951163379831126.jpg?param=40y40"
        },
        tags:["欧美","流行","电子"]
    }
    return playlist_f;
}
function formatAlbum(album) {
    let album_f={
        title:album.albumName,
        play_count:album.song_count,
        collect_count:11,
        download_count:32,
        publish_date:album.publish_time,
        publish_company: "环球唱片",
        img_url:album.photo,
        introduction:album.introduction,
        singer:{
            id:album.singer_id,
            name:album.singerName
        }
    }
    return album_f;
}
function  formatSong(song) {
    let song_f={
        id:song.songId,
        title:song.songName,
        duration:"03:20",
        album:{
            id:song.albumId,
            name:song.albumName
        },
        singer:{
            id:song.singerId,
            name:song.singerName
        }
    }
    return song_f
}
