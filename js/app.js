angular
    .module('RickAndMorty', ['ngRoute'])
    .config(['$routeProvider', 
        function($routeProvider) {
            $routeProvider
                .when('home', {
                    url: '/',
                    template: 'index.html'
                })
        }]);
    // .controller('baseController', ['$scope', 
    //     function($scope) {

    //     }]);