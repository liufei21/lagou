'use strict';
//自定义过滤器
angular.module('app').filter('filterList', function () {
  return function (list, obj) {
    //创建一个空数组
    var result = [];
    //遍历列表
    angular.forEach(list, function (item) {
      //声明的一个变量
      var flag = true;
      for(var e in obj) {
        if(item[e] !== obj[e]) {
          flag = false;
          // if(item[e]===""||obj[e]===""){
          //   result.push(obj);
          // }
        }
      }
      //如果条件为true的时候
      if (flag) {
        //把列表的每一项添加进创建的数组里
        result.push(item);
      }
    });
    return result;
    // 单项筛选
    // var result = [];
    // angular.forEach(list, function (item) {
    //     if (item.cityId === id) {
    //         result.push(item);
    //     }  else if (item.salaryId === id) {
    //         result.push(item);
    //     } else if (item.scaleId === id) {
    //         result.push(item);
    //     }
    // });
    // if (!id) {
    //     return list;
    // } else {
    //     return result;
    // }
  }
})