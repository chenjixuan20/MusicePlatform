new Vue({
	el: "#app",
	data:{
		play_list_num: "10",
		singer:{
		    name:'',
            img_url:'',
            intorduction:''
        },
		songs:[
            {
                title:"Safe ",
                duration:"03:20",
                album:"Safe",
                singer:"Daya"
            },
            {
                title:"Only You",
                duration:"03:09",
                album:"Only You",
                singer:"Cheat Codes"
            },{
                title:"You",
                duration:"03:20",
                album:"Odyssey",
                singer:"Matlda"
            },{
                title:"Need You Right Now",
                duration:"03:25",
                album:"Safe",
                singer:"Hedegaard"
            },{
                title:"Cruel",
                duration:"03:31",
                album:"Cruel",
                singer:"Tobu"
            },{
                title:"Horizon",
                duration:"03:00",
                album:"Horizon",
                singer:"Kill The Noise"
            },{
                title:"Your Place or Mine",
                duration:"03:14",
                album:"Your Place or Mine",
                singer:"Zay"
            },
            {
                title:"California",
                duration:"03:20",
                album:"California",
                singer:"Hot Shade"
            }
            ,{
                title:"Big Words",
                duration:"03:16",
                album:"Big Words",
                singer:"Klaas"
            }
            ,{
                title:"Because Of You",
                duration:"04:01",
                album:"Because Of You",
                singer:"Steve Void"
            }
        ],
        albumlist:[],
        other_singers: [
            {
                name:"陈楚生",
                pic_src:"http://p4.music.126.net/llgQFA_1pkyOwc4bpcVwDw==/109951163392171153.jpg?param=130y130"
            },
            {
                name:"陶喆",
                pic_src:"http://p4.music.126.net/HciCtD7swUU_D9wem9NfNA==/6044015418524944.jpg?param=130y130"
            },
            {
                name:"蔡健雅",
                pic_src:"http://p3.music.126.net/dCf6_nenhom9G1Ayo744Qg==/109951163105968989.jpg?param=130y130"
            },{
                name:"陈粒",
                pic_src:"http://p4.music.126.net/Q92YwJrk2f2tsK-7B0VIhQ==/6628955605123612.jpg?param=130y130"
            },
            {
                name:"张杰",
                pic_src:"http://p4.music.126.net/R4it3K4VVd4qOlMv1VvH_w==/18569651881628300.jpg?param=130y130"
            },
            {
                name:"张信哲",
                pic_src:"http://p3.music.126.net/dtm0L5L0OtxDzDpnFTqVyg==/3285340750049091.jpg?param=130y130"
            },
            {
                name:"方大同",
                pic_src:"http://p4.music.126.net/tTZcmIj2RV3ahQ-PvT-fEg==/109951163185998147.jpg?param=130y130"
            },
            {
                name:"林宥嘉",
                pic_src:"http://p3.music.126.net/DeH1T1OKwTL2bIg3l8L21A==/109951163186203713.jpg?param=130y130"
            },
            {
                name:"华晨宇",
                pic_src:"http://p3.music.126.net/-2o0OyBFtfCCoBqL1Q-TjA==/109951163078599089.jpg?param=130y130"
            }


        ],
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
	},
	methods:{
        fomatString:function (title,len) {
        	console.log(title,title.length)
            if(title.length>=len){

                return title.slice(0,len-1)+"..."
            }else{
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

        let id=getQueryString("id")
        axios.get('/singer', {
            params: {
                sg_id:id
            }
        })
            .then(function (response) {
                let data =  response.data[0];
                console.log(data)
                that.singer.name=data.singerName
                that.singer.img_url=data.big_photo
                that.singer.intorduction=data.introduction
                console.log(that.singer)

                console.log("搜索歌手成功");
            })
            .catch(function (error) {
                console.log("搜索歌手失败");
            });
    }
	

 //        },
 //        handleCurrentChange:function (val) {
 //            console.log(`当前页: ${val}`);
 //        },
 //        tabClick:function (currentTab) {
 //            let tabs=["单曲","专辑","歌单","歌词","用户"]
 //            this.current_tab=tabs[currentTab.index];

 //            switch (this.current_tab) {
 //                case "单曲":this.tab_num=this.songs.length; break;
 //                case "专辑":this.tab_num=this.albumlist.length;break;
 //                case "歌单":this.tab_num=this.playlists.length;break;
 //                case "歌词":this.tab_num=this.lyrics.length;break;
 //                case "用户":this.tab_num=this.users.length;break;
 //            }
 //        },
})
function getQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)
        return  decodeURI(r[2]);
    return null;
}