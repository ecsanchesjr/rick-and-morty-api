angular
    .module('RickAndMorty')
    .factory('Service', ['$http', 
        function($http) {
            const basePath = 'https://rickandmortyapi.com/api';
            return ({
                getAll: getAll
            });

            function get(endPoint, param) {
                
            }

            function getAll(endPoint, configs = null) {
                if(!!configs) {
                    return $http.get(`${basePath}${endPoint}`, configs);
                }
                return $http.get(`${basePath}${endPoint}`);
            };


        }]);