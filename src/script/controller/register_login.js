//注册登录
angular.module("app").controller("reg-loginCtrl",function ($scope,$http,$cookieStore,$state,$interval) {
        //初始页面的值
        $scope.user={
            phone:"",
            password:"",
            time:"获取验证码"
        };
        $scope.title="登录页面";
        $scope.deng="登录";
        $scope.zhu="注册";
        //验证码隐藏
        $scope.yan=false;
        //切换按钮
        $scope.cut=function () {
                //当验证码是隐藏的时候让验证码显示上边的按钮是注册按钮，
                //相当于去了注册页面
                if( $scope.yan==false){
                    $scope.deng="注册";
                    $scope.zhu="登录";
                    $scope.yan=true;
                    $scope.title="注册页面";
                }
                else{
                    $scope.deng="登录";
                    $scope.zhu="注册";
                    $scope.title="登录页面";
                    $scope.yan=false;
                }
        };
        //获取验证码倒计时
        $scope.countDown=function () {
            var btn=document.getElementsByClassName("yan_btn")[0];
            var num=60;
            $scope.user.time=num+"s";
            btn.style.background="#ccc";
                btn.disabled=true;
                var timer=$interval(function () {
                if(num<=0){
                    $interval.cancel(timer);
                    $scope.user.time="获取验证码";
                    btn.style.background="#fff";
                    btn.disabled=false;
                }
                else{
                    num--;
                    $scope.user.time=num+"s";
                }
            },1000);
        }
        //登录，注册的事件
        $scope.login=function () {
           // 当他是登录页面的时候调登录的API
           if($scope.deng==="登录") {
               $http.get("https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/login").then(function (res) {
                   //把手机号和密码保存在cook里
                   $cookieStore.put("obj",{key:$scope.user.phone,value:$scope.user.password});
                   // 跳转至职位列表页面
                   $state.go("example");
                    // console.log(res);
               })
           }
            // 当他是注册页面的时候调注册的API
            if($scope.deng==="注册") {
                $http.get("https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/register").then(function (res) {
                    alert("注册成功");
                    //清空内容
                    $scope.user.phone="";
                    $scope.user.password="";
                    //跳转到登录页面
                    $scope.deng="登录";
                    $scope.zhu="注册";
                    $scope.title="登录页面";
                    $scope.yan=false;
                })
            }
        }
})