

angular.module('stockApp')
    .config(function ($routeProvider) {

        $routeProvider
            .when('/register', {
                templateUrl: 'views/register.html',
                controller: 'RegisterCtrl'
            })
    });