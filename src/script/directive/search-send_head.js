//搜索页面和投递简历的头部的自定义指令
angular.module('app').directive('searchSend', function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/search-send_head.html'
    }
});