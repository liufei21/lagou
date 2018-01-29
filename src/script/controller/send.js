'use strict';
//投递简历
angular.module('app').controller('sendCtrl', function ($scope,$http) {
    $scope.title="投递记录";
    $scope.city="全部";
    $scope.pay="面试邀请";
    $scope.scale="不合适";
    $http.get("https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/my-post").then(function (res) {
        $scope.arr=res.data;
        //点击全部的时候全部显示
        $scope.all=function () {
            $scope.arr=res.data;
        }
        //点击面试邀请的时候
        $scope.invite=function () {
            //创建一个空数组
            $scope. arr1=[];
           // 遍历列表
           for(var i=0;i<res.data.length;i++){
               //如果列表里的的每一个值里的state===1的话
               //把他添加进创建的空数组里
               if(res.data[i].state==="1"){
                  $scope.arr1.push(res.data[i]);
               }
               //把空数组里的值赋值给页面遍历的数组里
               $scope.arr=$scope.arr1;
           }
        }
        //点击不合适的时候，创建一个空数组，遍历res.data，当他的
        //值等于-1时添加进去，最后在赋值给arr
        $scope.no=function () {
            $scope. arr1=[];
            for(var i=0;i<res.data.length;i++){
                if(res.data[i].state==="-1"){
                    $scope.arr1.push(res.data[i]);
                }
                $scope.arr=$scope.arr1;
            }
        }
    })
});