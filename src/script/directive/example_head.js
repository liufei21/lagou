//职位列表的头部的自定义指令
angular.module('app').directive('exampleHead', function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/example_head.html',
        controller:function ($scope,$cookieStore,$state) {
            $scope.name="";
            if($cookieStore.get("obj")){
                $scope.name="你好，同学们";
            }
            else{
                $scope.name="去登录";
            }
            $scope.cut=function () {
                if($scope.name=="去登录"){
                    $state.go("login");
                }
                if($scope.name=="你好，同学们"){
                    $state.go("logged");
                }
            }
        }
    }
});