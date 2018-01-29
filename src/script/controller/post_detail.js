'use strict';
//职位详情
angular.module("app").controller("postdetailCtrl",function ($scope,$http,$state,$cookieStore) {
    // console.log($state);
     $scope.title="职位详情";
       $http.get("https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/position-detail").then(function (res) {
         var id=$state.params.id;
         $scope.obj=res.data[id];
       })
})