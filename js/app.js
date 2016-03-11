'use strict';

angular.module('TroyApp' , ['ngSanitize', 'ui.router', 'ui.bootstrap'])
    .config(function($stateProvider) {
        $stateProvider.
            state('home', {
                url: '/',
                templateUrl: 'partials/home.html',
                controller: 'TroyCtrl'
            })
            .state('resume', {
                url: '/resume',
                templateUrl: 'partials/resume.html',
                controller: 'TroyCtrl'

            })
            .state('blog', {
                url: '/blog',
                templateUrl: 'partials/blog.html',
                controller: 'TroyCtrl'
            })
            .state('videos', {
                url: '/videos',
                templateUrl: 'partials/videos.html',
                controller: 'TroyCtrl'
            })
            .state('portfolio', {
                url: '/portfolio',
                templateUrl: 'partials/portfolio.html',
                controller: 'TroyCtrl'
            })
            .state('web', {
                url: '/portfolio/web-development',
                templateUrl: 'partials/web.html',
                controller: 'TroyCtrl'
            })
            .state('programming', {
                url: '/portfolio/programming',
                templateUrl: 'partials/programming.html',
                controller: 'TroyCtrl'
            })
            .state('design', {
                url: '/portfolio/design',
                templateUrl: 'partials/design.html',
                controller: 'TroyCtrl'
            })
            .state('music', {
                url: '/portfolio/music',
                templateUrl: 'partials/music.html',
                controller: 'TroyCtrl'
            })
    })
    .config(function($urlRouterProvider){
        // if the path doesn't match any of the urls you configured
        // otherwise will take care of routing the user to the specified url
        $urlRouterProvider.otherwise('/');
    })
    .controller('TroyCtrl', ['$scope', '$http', function($scope, $http) {

}]);