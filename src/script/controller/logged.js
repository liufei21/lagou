'use strict';
//已登录页面
angular.module("app").controller("loggedCtrl",function ($scope,$http) {
    $http.get("https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/login").then(function (res) {
        $scope.arr=res.data;
    })
})


