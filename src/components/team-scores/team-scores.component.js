function TeamScoresController() {
  var ctrl = this;
}

angular.module("myApp").component("teamScores", {
  templateUrl: "components/team-scores/team-scores.html",
  controller: TeamScoresController,
  bindings: {
    teams: "<",
  },
});
