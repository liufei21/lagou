//公用底部自定义指令
angular.module('app').directive('appFooter', function () {
   return {
       restrict: 'A',
       replace: true,
       templateUrl: 'view/template/footer.html',
       controller:function ($scope,$cookieStore,$state) {
           $scope.mine=function () {
               //如果cook有数据跳转已登录页面
               if($cookieStore.get("obj")){
                   $state.go("logged");
               }
               //否则跳转至我的去登录页面
               else{
                   $state.go("mine");
               }
           }
       }
   }
});