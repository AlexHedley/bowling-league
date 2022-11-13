function HighTeamController() {
  var ctrl = this;
}

angular.module("myApp").component("high-team", {
  templateUrl: "components/high-team/high-team.html",
  controller: HighTeamController,
  bindings: {
    title: "<",
    teams: "<",
  },
});
