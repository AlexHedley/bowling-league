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

  $scope.leagueFiltered;
  $scope.teamScoresFiltered;
  $scope.highGameFiltered;
  $scope.highSeriesFiltered;
  $scope.highAverageFiltered;
  $scope.highTeamGameScoreFiltered;
  $scope.highTeamSeriesScoreFiltered;
  $scope.highTeamGameHcpFiltered;
  $scope.highTeamSeriesHcpFiltered;
  $scope.fixturesFiltered;

  $scope.chosenDate = "";

  // Add to this
  $scope.dates = [
    { key: "14/12/2022", value: "2022-12-14" },
    { key: "07/12/2022", value: "2022-12-07" },
    { key: "30/11/2022", value: "2022-11-30" },
    { key: "23/11/2022", value: "2022-11-23" },
    { key: "16/11/2022", value: "2022-11-16" },
    { key: "09/11/2022", value: "2022-11-09" },
    { key: "02/11/2022", value: "2022-11-02" },
    { key: "26/10/2022", value: "2022-10-26" },
    { key: "19/10/2022", value: "2022-10-19" },
    { key: "12/10/2022", value: "2022-10-12" },
    { key: "05/10/2022", value: "2022-10-05" },
  ];

  $scope.init = function () {
    getData();
    // $scope.chosenDate = { key: "09/11/2022", value: "2022-11-09" };
    // $scope.loadFile();
  };

  $scope.loadFile = () => {
    $scope.dateValue = $scope.chosenDate.value;
    // $scope.dateCode = $scope.chosenDate.key;

    $scope.leagueFiltered = $filter("filter")($scope.league, (item) => {
      return item.date === $scope.dateValue;
    })[0].teams;

    $scope.teamScoresFiltered = $filter("filter")($scope.teamScores, (item) => {
      return item.date === $scope.dateValue;
    })[0].teams;

    $scope.highGameFiltered = $filter("filter")($scope.highGame, (item) => {
      return item.date === $scope.dateValue;
    })[0].players;

    $scope.highSeriesFiltered = $filter("filter")($scope.highSeries, (item) => {
      return item.date === $scope.dateValue;
    })[0].players;

    $scope.highAverageFiltered = $filter("filter")(
      $scope.highAverage,
      (item) => {
        return item.date === $scope.dateValue;
      }
    )[0].players;

    $scope.highTeamGameScoreFiltered = $filter("filter")(
      $scope.highTeamGameScore,
      (item) => {
        return item.date === $scope.dateValue;
      }
    )[0].teams;

    $scope.highTeamSeriesScoreFiltered = $filter("filter")(
      $scope.highTeamSeriesScore,
      (item) => {
        return item.date === $scope.dateValue;
      }
    )[0].teams;

    $scope.highTeamGameHcpFiltered = $filter("filter")(
      $scope.highTeamGameHcp,
      (item) => {
        return item.date === $scope.dateValue;
      }
    )[0].teams;

    $scope.highTeamSeriesHcpFiltered = $filter("filter")(
      $scope.highTeamSeriesHcp,
      (item) => {
        return item.date === $scope.dateValue;
      }
    )[0].teams;

    $scope.fixturesFiltered = $filter("filter")($scope.fixtures, (item) => {
      return item.date === $scope.dateValue;
    })[0].fixtures;
  };

  getData = () => {
    var leagueFile = "data/league.json";
    $http.get(leagueFile).then(function (response) {
      $scope.league = response.data;
    });

    var scoresFile = "data/scores.json";
    $http.get(scoresFile).then(function (response) {
      $scope.teamScores = response.data;
    });

    var highGameFile = "data/high-game.json";
    $http.get(highGameFile).then(function (response) {
      $scope.highGame = response.data;
    });

    var highSeriesFile = "data/high-series.json";
    $http.get(highSeriesFile).then(function (response) {
      $scope.highSeries = response.data;
    });

    var highAverageFile = "data/high-average.json";
    $http.get(highAverageFile).then(function (response) {
      $scope.highAverage = response.data;
    });

    var highTeamGameScoreFile = "data/high-team-game-score.json";
    $http.get(highTeamGameScoreFile).then(function (response) {
      $scope.highTeamGameScore = response.data;
    });

    var highTeamSeriesScoreFile = "data/high-team-series-score.json";
    $http.get(highTeamSeriesScoreFile).then(function (response) {
      $scope.highTeamSeriesScore = response.data;
    });

    var highTeamGameHcpFile = "data/high-team-game-hcp.json";
    $http.get(highTeamGameHcpFile).then(function (response) {
      $scope.highTeamGameHcp = response.data;
    });

    var highTeamSeriesHcpFile = "data/high-team-series-hcp.json";
    $http.get(highTeamSeriesHcpFile).then(function (response) {
      $scope.highTeamSeriesHcp = response.data;
    });

    var fixturesFile = "data/fixtures.json";
    $http.get(fixturesFile).then(function (response) {
      $scope.fixtures = response.data;
    });
  };

  $scope.init();
});
