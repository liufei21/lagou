//公用头部自定义指令
angular.module('app').directive("appHead", function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/header.html',
        scope:{
            detail:"@"
         },
       link:function (scope) {
           scope.back=function () {
              window.history.go(-1);
           }
       }
    }
});