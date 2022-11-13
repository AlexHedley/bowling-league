var myApp = angular.module("myApp", []);
myApp.controller("myController", function ($scope, $http, $q, $filter) {
  $scope.teamScores = [];
  $scope.league;
  $scope.teamScores;
  $scope.highGame;
  $scope.highSeries;
  $scope.highAverage;
  $scope.highTeamGameScore;
  $scope.highTeamSeriesScore;
  $scope.highTeamGameHcp;
  $scope.highTeamSeriesHcp;
  $scope.fixtures;

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

    var highTeamGameScoreFile = "data/high-team-game-score.json";
    $http.get(highTeamGameScoreFile).then(function (response) {
      $scope.highTeamGameScore = response.data.teams;
    });

    var highTeamSeriesScoreFile = "data/high-team-series-score.json";
    $http.get(highTeamSeriesScoreFile).then(function (response) {
      $scope.highTeamSeriesScore = response.data.teams;
    });

    var highTeamGameHcpFile = "data/high-team-game-hcp.json";
    $http.get(highTeamGameHcpFile).then(function (response) {
      $scope.highTeamGameHcp = response.data.teams;
    });

    var highTeamSeriesHcpFile = "data/high-team-series-hcp.json";
    $http.get(highTeamSeriesHcpFile).then(function (response) {
      $scope.highTeamSeriesHcp = response.data.teams;
    });

    var fixturesFile = "data/fixtures.json";
    $http.get(fixturesFile).then(function (response) {
      $scope.fixtures = response.data.fixtures;
    });
  };

  $scope.init();
});
