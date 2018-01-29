//职位详情自定义指令投递简历未完成
angular.module('app').directive("postdetailBody", function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/post-detail_body.html',
        controller:function ($scope,$cookieStore,$state) {
          //初始化button按钮的值为空
          $scope.resume = "";
          //如果cook里有值的话button里的值为投个简历
          if ($cookieStore.get("obj")) {
            $scope.resume = "投个简历";
          }
          //cook里没有值的话button里的值为去登录
          else {
            $scope.resume = "去登录";
          }
          //    按钮的点击事件
          $scope.cut = function () {
            //  如果按钮里的值为去登录跳转登录页面
            if ($scope.resume == "去登录") {
              $state.go("login");
            }
            if ($scope.resume == "投个简历") {
              alert("投递成功！");
              $scope.resume = "已投递";
            }
          }
        }
    }
});