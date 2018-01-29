'use strict';
//搜索
angular.module('app').controller('searchCtrl', function ($scope,$http,$rootScope) {
    $http.get(" https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/position-list").then(function (res) {
        $scope.arr=res.data;
        $scope.city="城市";
        $scope.pay="薪资";
        $scope.scale="公司规模";
    })
    //遮罩和内容隐藏
    $scope.isShow=false;
    //点击城市的时候
    $scope.all=function () {
        $http.get("https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/city").then(function (res) {
            $scope.arr2=res.data;
            //遮罩和内容显示
            $scope.isShow=true;
        })
    }
//    点击薪资的时候
    $scope.invite=function () {
        $http.get("https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/salary").then(function (res) {
            $scope.arr2=res.data;
            //遮罩和内容显示
            $scope.isShow=true;
        })
    }
    //点击公司规模的时候
    $scope.no=function () {
        $http.get("https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/scale").then(function (res) {
            $scope.arr2=res.data;
            //遮罩和内容显示
            $scope.isShow=true;
        })
    }
//    点击过滤器
//  声明一个空对象收集参数
  $rootScope. obj={};
  $scope.list=function (item) {
    //点击遍历出来的城市和薪资和公司规模的时候让遮罩和
    //遍历出来的城市和薪资和公司规模隐藏
    $scope.isShow=false;
        // console.log(item);
        //如果每一个遍历的item的id都有值得话，
        if(item.id){
            $rootScope.obj[item.idName]=item.id;//空对象里显示和item.id值相等的值
            // console.log($rootScope.obj);
        }
        else{
          delete  $rootScope.obj[item.idName];//如果没有值的话删除空对象里item.idName的值
          // console.log($rootScope.obj);
        }
  }
//    点击取消和遮罩的时候让遮罩和内容隐藏
    $scope.off=function () {
        $scope.isShow=false;
    }
});