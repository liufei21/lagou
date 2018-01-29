//我的  去登录的自定义指令
angular.module('app').directive('mineBody', function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/mine_body.html'
    }
});