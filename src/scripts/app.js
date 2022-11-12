var myApp = angular.module("myApp", []);
myApp.controller("myController", function ($scope, $http, $q, $filter) {
  $scope.teamScores = [];
  $scope.league;

  $scope.init = function () {
    getData();
  };

  getData = () => {
    var leagueFile = "data/league.json";
    $http.get(leagueFile).then(function (response) {
      $scope.league = response.data.teams;
    });

    var scoresFile = "data/scores.json";
    $http.get(scoresFile).then(function (response) {
      $scope.teamScores = response.data.teams;
    });
  };

  $scope.init();
});
