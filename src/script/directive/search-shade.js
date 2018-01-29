//遮罩内容的自定义指令
angular.module('app').directive('shadeBody', function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/search-shade.html'
    }
});