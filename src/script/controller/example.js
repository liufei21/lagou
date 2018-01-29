'use strict';
//职位列表
angular.module('app').controller('exampleCtrl', function ($scope,$http,$cookieStore,$state) {
    $http.get(" https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/position-list").then(function (res) {
        $scope.arr=res.data;
    })
});