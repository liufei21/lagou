//loding动画自定义指令
angular.module('app').directive('loading', function () {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/loading.html'
    //自己的动画
    // controller:function ($scope) {
    //   var ul=document.getElementsByClassName("dong")[0];
    //   var li=document.getElementsByClassName("li");
    //   setInterval(function () {
    //           for(var i=0;i<li.length;i++){
    //             li[i].style.height=parseInt(Math.random()*50)+"px";
    //           }
    //     },500)
    // }
  }
});