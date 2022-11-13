function FixtureController() {
  var ctrl = this;
}

angular.module("myApp").component("fixture", {
  templateUrl: "components/fixture/fixture.html",
  controller: FixtureController,
  bindings: {
    fixtures: "<",
  },
});
