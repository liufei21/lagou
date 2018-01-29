'use strict';
//公司职位详情
angular.module("app").controller("com-detailCtrl",function ($scope,$http,$state) {
    $scope.title="公司职位";
    $http.get("https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/company").then(function (res) {
        var id=$state.params.id
        $scope.obj1=res.data[id];
        $scope.date=res.data[id].positionClass;
        $scope.show=0;
        $scope.cut=function (index) {
            $scope.show=index;
        }
    })
})