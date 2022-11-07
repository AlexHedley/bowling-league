var myApp = angular.module("myApp", []);
myApp.controller("myController", function ($scope, $http, $q, $filter) {

    $scope.teams = [];

    $scope.init = function () {
        getData();
    };

    getData = () => {
        var file = "data/scores.json";

        $http.get(file)
            .then(function (response) {
                $scope.teams = response.data.teams;
            });
    };

    $scope.init();
});