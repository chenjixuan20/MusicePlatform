new Vue({
    el:"#app",
    data:{
        //nav
        menu_active_index:1,

        loginFormVisible: false,
        formLabelWidth: '40px',
        search_wd:"",
        login_form: {
            account: '',
            password: '',
        },
        registerFormVisible: false,
        register_form:{
            account:"",
            password:"",
            password_repeat:"",
            verification_code:""
        },
        user:null,
        //page
        songs_count:0,
        songs:[]
    },
    methods:{
        search:function () {
            console.log("搜索")
            window.location.href="../searchResults/searchResults.html?"+`search_wd=${this.search_wd}`
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
                        let user_f = {
                            id: user.userId,
                            name: user.userName,
                            img_url: user.photo
                        };
                        sessionStorage.setItem('bigmusic_user',JSON.stringify(user_f))
                        axios.get('/user', {
                            params: {
                                u_id: user.userId
                            }
                        })
                            .then(function (response) {
                                let data = response.data[0];
                                that.user = formatUser(data,user.userId)
                                if(that.user.name==undefined){
                                    that.user.name=user_f.name
                                }
                                console.log("获取用户成功");
                            })
                            .catch(function (error) {
                                console.log("获取用户失败");
                            });
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
        toRegisterORLogin:function (type) {
            let that=this;
            if(type=="Login"){
                that.registerFormVisible=false;
                setTimeout(function () {
                    that.loginFormVisible=true;
                },200)
            }
            else if(type=="Register"){
                that.loginFormVisible=false;
                setTimeout(function () {
                    that.registerFormVisible=true;
                },200)
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
                window.location.href = "../index/index.html?type=mine&id="

            }
            if (command == "homepage") {
                window.location.href = "../homePage/homePage.html?type=mine&id=" + this.user.id
            }

        }
    },
    created:function () {
        let type=GetQueryString("type");
        let id=GetQueryString("id")
        let that=this
        if(type=="mine"){
            //获得我的主页
            let user;
            if(user=JSON.parse(sessionStorage.getItem("bigmusic_user"))){
                console.log(user)

                axios.get('/user', {
                    params: {
                        u_id: user.id
                    }
                })
                    .then(function (response) {
                        let data = response.data[0];
                        that.user = formatUser(data,user.id)
                        if(that.user.name==undefined){
                            console.log("捡来了")
                            that.user.name=user.name
                        }
                        console.log(that.user)
                        console.log("获取用户成功");
                    })
                    .catch(function (error) {
                        console.log("获取用户失败");
                    });
            }

        }else {
            //获得其他人的主页
            axios.get('/user', {
                params: {
                    u_id: id
                }
            })
                .then(function (response) {
                    let data = response.data[0];
                    that.user = formatUser(data,id)
                    console.log("获取用户成功");
                })
                .catch(function (error) {
                    console.log("获取用户失败");
                });
        }
    }
})
function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]);
    return null;
}
function formatUser(user,id) {
    let user_f={
        id:id,
        name:user.userName,
        img_url:user.photo,
        likes_count:15,
        listen_count:26,
        playlist_count:4,
        location:user.location
    }
    return user_f
}