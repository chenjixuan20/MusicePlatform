new Vue({
    el: '#app',
    data: {
        // form
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
        carousel_items: [
            {
                image_url: "http://p1.music.126.net/Xup_vNV7Nt_x-tkA_rt9Kg==/109951163386184344.jpg",
                link_url: ""
            },
            {
                image_url: "http://p1.music.126.net/3uB-oiMF9kijh08H3V7h0g==/109951163388093787.jpg",
                link_url: ""
            },
            {
                image_url: "http://p1.music.126.net/JyDZ9jQzc6oEIxtKOAmPGg==/109951163391348799.jpg",
                link_url: ""
            },
            {
                image_url: "http://p1.music.126.net/w7iaYYRtXuFJpOknc--oUg==/109951163376770114.jpg",
                link_url: ""
            },
            {
                image_url: "http://p1.music.126.net/GOtYkordqsMIfkig0nrLVg==/109951163383038987.jpg",
                link_url: ""
            }
        ],
        hot_playlist: [
            // {
            //     id: "1",
            //     title: "韵律中邂逅惊艳女嗓，美到心醉",
            //     img_url: "http://p3.music.126.net/2-04ThxCahYBMbkXzFHwfw==/19161189137853511.jpg?param=200y200",
            //     num: "235416",
            //     create_date: "2018-06-27 17:12"
            // },
            // {
            //     id: "2",
            //     title: "岁月留声｜听一张２０世纪的老唱片",
            //     img_url: "http://p1.music.126.net/gM_h6qjE0iQQAwOnkXcysQ==/109951163362013434.jpg?param=140y140",
            //     num: "235416",
            //     create_date: "2018-06-27 17:12"
            // },
            // {
            //     id: "3",
            //     title: "『 暴露年龄 』致那些年我们抖过的腿",
            //     img_url: "http://p1.music.126.net/isVUh8ZqREZFqBXk3q6Xbg==/109951163372146234.jpg?param=140y140",
            //     num: "235416",
            //     create_date: "2018-06-27 17:12"
            // },
            // {
            //     id: "4",
            //     title: "小鬼-王琳凯//扑朔迷离的快乐病毒了解下？",
            //     img_url: "http://p1.music.126.net/x7itXXQ0c_LBCK2CIUjF_Q==/19193074975068935.jpg?param=140y140",
            //     num: "235416",
            //     create_date: "2018-06-27 17:12"
            // },
            // {
            //     id: "5",
            //     title: "【大咖】作家骁骑校：生命中最重要的部分永远鲜活",
            //     img_url: "http://p1.music.126.net/DHQ-9Q8XSkVcZfHJKfeOYw==/109951163378543579.jpg?param=140y140",
            //     num: "235416",
            //     create_date: "2018-06-27 17:12"
            // },
            // {
            //     id: "6",
            //     title: "纯音丨努力到无能为力 拼搏到感动自己",
            //     img_url: "http://p1.music.126.net/RO7-jpsyBH_kAIvEKsBp2A==/109951163214483552.jpg?param=140y140",
            //     num: "235416",
            //     create_date: "2018-06-27 17:12"
            // },
            // {
            //     id: "7",
            //     title: "『作业党福利』‖慎入！会上瘾❤",
            //     img_url: "http://p1.music.126.net/J1wokjMCVWr5nK6KBIYKkA==/18931391207609246.jpg?param=140y140",
            //     num: "235416",
            //     create_date: "2018-06-27 17:12"
            // },
            // {
            //     id: "8",
            //     title: "凯叔·声律启蒙·一东①",
            //     img_url: "http://p1.music.126.net/xAdgxgY0XJSUznvIPOCJpA==/109951163039233018.jpg?param=140y140",
            //     num: "235416",
            //     create_date: "2018-06-27 17:12"
            // }
        ],
        hot_albumlist: [
            // {
            //     id: "1",
            //     title: "渐渐",
            //     singer: {
            //         id: 1,
            //         name: "陈奕迅"
            //     },
            //     img_url: "http://p1.music.126.net/SGRNxyeA6_43M8oB0TuqrQ==/109951163370531309.jpg?param=130y130"
            // },
            // {
            //     id: "2",
            //     title: "王牌冤家",
            //     singer: {
            //         id: 1,
            //         name: "李荣浩"
            //     },
            //     img_url: "http://p3.music.126.net/ldRfSHRgtSZRsNruD54taQ==/109951163370797182.jpg?param=100y100"
            // },
            // {
            //     id: "3",
            //     title: "平凡的一天",
            //     singer: {
            //         id: 2,
            //         name: "毛不易"
            //     },
            //     img_url: "http://p4.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg?param=100y100"
            // },
            // {
            //     id: "4",
            //     title: "Born To Be Yours",
            //     singer: {
            //         id: 3,
            //         name: "Kygo / Imagine Dragons"
            //     },
            //     img_url: "http://p3.music.126.net/w84c5_ebsl9cqchrzT1pug==/109951163349702736.jpg?param=100y100"
            // },
            // {
            //     id: "5",
            //     title: "F.L.Y. BOYS F.L.Y. GIRLS",
            //     singer: {
            //         id: 6,
            //         name: "GENERATIONS from EXILE TRIBE"
            //     },
            //     img_url: "http://p4.music.126.net/ucsboPMm818QenSE8g-YnQ==/109951163336294560.jpg?param=100y100"
            // }
        ],
        hot_singer: [
            // {
            //     id: "1",
            //     name: "张惠妹aMEI",
            //     info: "台湾歌手张惠妹",
            //     img_url: "http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62"
            // },
            // {
            //     id: "2",
            //     name: "Fine乐团",
            //     info: "独立音乐人",
            //     img_url: "http://p1.music.126.net/1EN_iqQWU_E3DafzEOh3cA==/3302932937408956.jpg?param=62y62"
            // },
            // {
            //     id: "3",
            //     name: "萬曉利",
            //     info: "民谣歌手、中国现代民谣的代表人物之一",
            //     img_url: "http://p1.music.126.net/ZuktZvjcxpYBjcWC3gmbPg==/19027048718765608.jpg?param=62y62"
            // },
            // {
            //     id: "4",
            //     name: "音乐人赵雷",
            //     info: "民谣歌手",
            //     img_url: "http://p1.music.126.net/v_zYgE9kmAwVGWV2c8hFxA==/7943971513291094.jpg?param=62y62"
            // }
        ],
        hot_song: [
            // {
            //     id: "1",
            //     title: "离开你的城市后",
            //     singer: "陈壹千",
            //     img_url: "http://p1.music.126.net/45634l0yUQ_sn9txSBYtwQ==/109951163381808991.jpg?param=50y50&quality=100"
            // },
            // {
            //     id: "2",
            //     title: "又失恋了",
            //     singer: "花粥",
            //     img_url: "http://p1.music.126.net/j8Ome8FtxMRFZW6ud7Wptg==/109951163380476040.jpg?param=50y50&quality=100"
            // },
            // {
            //     id: "3",
            //     title: "城南谣",
            //     singer: "木小雅",
            //     img_url: "http://p1.music.126.net/vkq9WoQY_X8aRup0_whfrw==/109951163381867578.jpg?param=50y50&quality=100"
            // },
            // {
            //     id: "4",
            //     title: "怪咖",
            //     singer: "薛之谦",
            //     img_url: "http://p1.music.126.net/3nHehbAPLSlpNM0bdiL1JQ==/109951163380470594.jpg?param=50y50&quality=100"
            // }
        ]

    },
    methods: {
        fomatString: function (title, len) {
            if (title.length >= len) {
                return title.slice(0, len - 1) + "..."
            } else {
                return title
            }

        },
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
    created: function () {

        let that = this
        if(user=JSON.parse(sessionStorage.getItem("bigmusic_user"))){
            console.log(user)
            that.user = {
                id: user.id,
                name: user.name,
                img_url: user.img_url
            };
        }

        axios.get('/hot/album', {
            params: {
                limit: 5
            }
        })
            .then(function (response) {
                console.log(response)
                let data = response.data;
                console.log(data.map(formatAlbums))
                that.hot_albumlist = data.map(formatAlbums)
                console.log("获取热门唱片成功");
            })
            .catch(function (error) {
                console.log("获取热门唱片失败");
            });

        axios.get('/hot/singer', {
            params: {
                limit: 5
            }
        })
            .then(function (response) {
                let data = response.data;
                that.hot_singer = data.map(formatSinger)
                console.log("获取热门歌手成功");
            })
            .catch(function (error) {
                console.log("获取热门歌手失败");
            });
        axios.get('/hot/playlist', {
            params: {
                limit: 8
            }
        })
            .then(function (response) {
                let data =  response.data;
                console.log(data)
                that.hot_playlist = data.map(formatPlaylists)
                console.log("获取热门歌单成功");
            })
            .catch(function (error) {
                console.log("获取热门歌单失败");
            });
        axios.get('/hot/song', {
            params: {
                limit: 5
            }
        })
            .then(function (response) {
                let data = response.data;
                that.hot_song = data.map(formatSong)
                console.log("获取热门歌曲成功");
            })
            .catch(function (error) {
                console.log("获取热门歌曲失败");
            });
    }
})

function formatPlaylists(playlist) {
    let playlist_f = {
        id: playlist.playlistId,
        title: playlist.playlistName,
        img_url: playlist.photo,
        num: playlist.num,
        create_date: playlist.creat_time
    }
    return playlist_f
}

function formatAlbums(album) {
    let album_f = {
        id: album.albumId,
        title: album.albumName,
        singer: {
            id: album.singerId,
            name: album.singerName
        },
        img_url: album.photo
    }
    return album_f
}

function formatSinger(singer) {
    let singer_f = {
        id: singer.singerId,
        name: singer.singerName,
        info: singer.introduction,
        img_url: singer.photo
    }
    return singer_f
}

function formatSong(song) {
    let song_f = {
        id: song.songId,
        title: song.songName,
        singer: song.singerName,
        img_url: song.photo
    }
    return song_f
}

