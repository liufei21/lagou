//搜索头部自定义指令
angular.module('app').directive('searchHead', function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/search_head.html'
    }
});