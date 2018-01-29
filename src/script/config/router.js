'use strict';
// 路由
angular.module('app').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('example', {
        url: '/example',
        templateUrl: 'view/example.html'
    });
    $stateProvider.state('search', {
        url: '/search',
        templateUrl: 'view/search.html'
    });
    $stateProvider.state('mine', {
        url: '/mine',
        templateUrl: 'view/mine.html'
    });
    $stateProvider.state('register', {
        url: '/register',
        templateUrl: 'view/register.html'
    });
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'view/register_login.html'
    });
    $stateProvider.state('postdetail', {
        url: '/postdetail/:id',
        templateUrl: 'view/post_detail.html'
    });
    $stateProvider.state('comdetail', {
        url: '/comdetail/:id',
        templateUrl: 'view/com_detail.html'
    });
    $stateProvider.state('logged', {
        url: '/logged/',
        templateUrl: 'view/logged.html'
    });
    $stateProvider.state('send', {
        url: '/send',
        templateUrl: 'view/send.html'
    });
    $stateProvider.state('scale', {
        url: '/scale',
        templateUrl: 'view/scale.html'
    });
    $urlRouterProvider.otherwise('example');
}]);
