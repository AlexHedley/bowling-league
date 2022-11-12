function LeagueController() {
  var ctrl = this;
}

angular.module("myApp").component("league", {
  templateUrl: "components/league/league.html",
  controller: LeagueController,
  bindings: {
    league: "<",
  },
});
