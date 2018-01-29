'use strict';
//收藏
angular.module('app').controller('scaleCtrl', function ($scope,$http) {
    $scope.title="我的收藏";
    $http.get("https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/favorite").then(function (res) {
        $scope.arr=res.data;
    })
});