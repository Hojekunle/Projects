var app =  angular.module('main-App',['ngRoute','angularUtils.directives.dirPagination']);

app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'home.html',
                controller: 'AdminController'
            }).
            when('/products', {
                templateUrl: 'products.html',
                controller: 'ProductController'
            });

            $locationProvider.html5Mode(true);
}]);

app.value('apiUrl', 'http://localhost:8000/api/v1');
