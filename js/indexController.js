angular
    .module('RickAndMorty')
    .controller('baseController', ['$scope', '$window', 'Service',
        function ($scope, $window, Service) {
            $scope.characters = [];
            $scope.nextPage = 1;
            $scope.totalPages = null;
            $scope.reached = false;
            $scope.loading = true;

            Service.getAll('/character')
                .then(function (response) {
                    console.log(response);

                    $scope.nextPage = response.data.info.next.split('?page=')[1];
                    $scope.characters = response.data.results;
                    $scope.totalPages = response.data.info.pages;
                    $scope.loading = false;
                });

            $scope.loadNext = function () {
                if($scope.nextPage <= $scope.totalPages) {
                    $scope.loading = true;
                    console.log("Loading more")
                    Service.getAll('/character', {
                        params: {
                            page: $scope.nextPage
                        }
                    })
                    .then(function (response) {
                        console.log(response)

                        $scope.nextPage = response.data.info.next.split('?page=')[1];
                        $scope.characters = [...$scope.characters ,...response.data.results];
                        $scope.reached = false;
                        $scope.loading = false;
                    });
                }
            };

            $window.onscroll = function () {
                if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight && !$scope.reached) {
                    $scope.reached = true;
                    $scope.loadNext();
                  }
            };
        }
    ]);