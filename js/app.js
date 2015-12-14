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
            .state('processbook', {
                url: '/processbook',
                templateUrl: 'partials/processbook.html',
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