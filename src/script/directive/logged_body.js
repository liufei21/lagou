//我的  已登录的自定义指令
angular.module('app').directive('loggedBody', function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/logged_body.html',
        controller:function ($scope,$cookieStore,$state) {
                //点击退出登录的时候删除cook里的数据并跳转至我的去登录页面
                $scope.quit=function () {
                        $cookieStore.remove("obj");
                        $state.go("mine");
                }
                //点击投递按钮跳转至投递记录页面
                $scope.send=function () {
                    $state.go("send");
                }
                //点击收藏按钮跳转至收藏页面
                $scope.collect=function () {
                    $state.go("scale");
                }
        }
    }
});