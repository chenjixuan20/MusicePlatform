let app=new Vue({
    el:"#app",
    data:{
        limit:10
        ,
        total:100,
        current_page:1,
        search_wd:"",

        current_tab:"首单曲",

        song_current_page:1,
        song_total:100,

        album_current_page:1,
        album_total:200,

        playlist_current_page:1,
        playlist_total:100,

        lyric_current_page:1,
        lyric_total:500,

        user_current_page:1,
        user_total:400,
        songs:[],
        albumlist:[],
        playlists:[],
        lyrics:[],
        users:[],
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
        menu_active_index: '1'
    },
    watch:{
        current_page:function () {
            //TODO 请求某一页的数据
        }
    },
    methods:{
        fomatString:function (title,len) {
            if(title.length>=len){
                return title.slice(0,len-1)+"..."
            }else{
                return title
            }

        },

        handleCurrentChange:function (val) {
            let that=this;
            let current_tab=that.current_tab;
            let offset=(val-1)*that.limit+1;
            let limit=that.limit;
            console.log(`当前页: ${val}`);
            if(current_tab=="首单曲"){
                //访问后台从offset开始limit个song
                this.song_current_page=val;
                axios.get('/search', {
                    params: {
                        wd:that.search_wd,
                        type:"song",
                        limit: limit,
                        offset:offset

                    }
                })
                    .then(function (response) {
                        let data =  response.data;
                        console.log(data)
                        that.song_total=data.song_total
                        that.total=data.song_total
                        that.songs = data.songs.map(formatSong)
                        console.log("搜索歌曲成功");

                    })
                    .catch(function (error) {
                        console.log("搜索歌曲失败");
                    });
            }else if(current_tab=="张专辑"){
                this.album_current_page=val;
                axios.get('/search', {
                    params: {
                        wd:that.search_wd,
                        type:"album",
                        limit: that.limit,
                        offset:offset

                    }
                })
                    .then(function (response) {
                        let data =  response.data;
                        console.log(data)
                        that.album_total=data.album_total
                        that.albumlist = data.albums.map(formatAlbums)
                        console.log("搜索专辑成功");
                    })
                    .catch(function (error) {
                        console.log("搜索专辑失败");
                    });
            }else if(current_tab=="张歌单"){
                this.playlist_current_page=val;
                axios.get('/search', {
                    params: {
                        wd:that.search_wd,
                        type:"playlist",
                        limit: that.limit,
                        offset:offset

                    }
                })
                    .then(function (response) {
                        let data =  response.data;
                        console.log(data)
                        that.playlist_total=data.playlist_total
                        that.playlists = data.playlists.map(formatPlaylist)
                        console.log("搜索歌单成功");
                    })
                    .catch(function (error) {
                        console.log("搜索歌单失败");
                    });
            }
        },
        tabClick:function (currentTab) {
            let that=this
            let offset=that.limit*(this.current_page-1)+1
            let tabs=["首单曲","张专辑","张歌单","个歌手","个用户"]
            this.current_tab=tabs[currentTab.index];


            switch (this.current_tab) {
                case "首单曲":
                    this.total=this.song_total;
                    this.current_page=this.song_current_page;
                    break;
                case "张专辑":
                    if(that.albumlist!=[]){
                        axios.get('/search', {
                            params: {
                                wd:that.search_wd,
                                type:"album",
                                limit: that.limit,
                                offset:offset

                            }
                        })
                            .then(function (response) {
                                let data =  response.data;
                                console.log(data)
                                that.album_total=data.album_total
                                that.albumlist = data.albums.map(formatAlbums)
                                console.log("搜索专辑成功");
                                that.total=that.album_total;
                                that.current_page=that.album_current_page;
                            })
                            .catch(function (error) {
                                console.log("搜索专辑失败");
                            });
                    }
                    break;
                case "张歌单":
                    if(that.playlists!=[]){
                        axios.get('/search', {
                            params: {
                                wd:that.search_wd,
                                type:"playlist",
                                limit: that.limit,
                                offset:offset

                            }
                        })
                            .then(function (response) {
                                let data =  response.data;
                                console.log(data)
                                that.playlist_total=data.playlist_total
                                that.playlists = data.playlists.map(formatPlaylist)
                                console.log("搜索歌单成功");
                                that.total=that.playlist_total;
                                that.current_page=that.playlist_current_page;
                            })
                            .catch(function (error) {
                                console.log("搜索歌单失败");
                            });
                    }
                    break;
                case "个歌手":
                    this.total=this.lyric_total;
                    this.current_page=this.lyric_current_page;
                    break;
                case "个用户":
                    this.total=this.user_total;
                    this.current_page=this.user_current_page;
                    break;
            }
        },
        search_func:function () {
            let that=this
            //TODO 搜索
            let offset=that.limit*(this.current_page-1)+1
            axios.get('/search', {
                params: {
                    wd:that.search_wd,
                    type:"song",
                    limit: that.limit,
                    offset:offset

                }
            })
                .then(function (response) {
                    let data =  response.data;
                    console.log(data)
                    that.song_total=data.song_total
                    that.total=data.song_total
                    that.songs = data.songs.map(formatSong)
                    console.log("搜索歌曲成功");
                })
                .catch(function (error) {
                    console.log("搜索歌曲失败");
                });
            console.log(this.search_wd)
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

        that.tab_num=this.song_total;
        that.search_wd=getQueryString("search_wd")
        //TODO 搜索
        let offset=that.limit*(this.current_page-1)+1
        axios.get('/search', {
            params: {
                wd:that.search_wd,
                type:"song",
                limit: that.limit,
                offset:offset

            }
        })
            .then(function (response) {
                let data =  response.data;
                console.log(data)
                that.song_total=data.song_total
                that.total=data.song_total
                that.songs = data.songs.map(formatSong)
                console.log("搜索歌曲成功");
            })
            .catch(function (error) {
                console.log("搜索歌曲失败");
            });
        console.log(this.search_wd)
    }

})
function getQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)
        return  decodeURI(r[2]);
    return null;
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
function formatPlaylist(playlist) {
    let playlist_f={
        id:playlist.playlistId,
        title:playlist.playlistName,
        img_url:playlist.photo,
        play_count:playlist.num,
        num:playlist.song_count,
        create_date:playlist.creat_time,
        author:{
            id:playlist.userId,
            name:playlist.userName,
        }
    }
    return playlist_f
}
