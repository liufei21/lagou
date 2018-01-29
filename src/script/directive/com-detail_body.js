//公司职位详情的指令
angular.module("app").directive("comdetailBody",function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/com-detail_body.html'
    }
});