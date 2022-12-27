function HighTeamController() {
  var ctrl = this;
}

angular.module("myApp").component("highTeam", {
  templateUrl: "components/high-team/high-team.html",
  controller: HighTeamController,
  bindings: {
    title: "<",
    teams: "<",
  },
});
