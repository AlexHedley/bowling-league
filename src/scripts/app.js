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

    var highGameFile = "data/high-game.json";
    $http.get(highGameFile).then(function (response) {
      $scope.highGame = response.data.players;
    });

    var highSeriesFile = "data/high-series.json";
    $http.get(highSeriesFile).then(function (response) {
      $scope.highSeries = response.data.players;
    });

    var highAverageFile = "data/high-average.json";
    $http.get(highAverageFile).then(function (response) {
      $scope.highAverage = response.data.players;
    });
  };

  $scope.init();
});
