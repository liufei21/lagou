//职位列表，搜索页面的主体的自定义指令
angular.module('app').directive('appBody', function () {
   return {
       restrict: 'A',
       replace: true,
       templateUrl: 'view/template/post-search_body.html'
   }
});