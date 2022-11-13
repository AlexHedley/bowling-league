function HighController() {
  var ctrl = this;
}

angular.module("myApp").component("high", {
  templateUrl: "components/high/high.html",
  controller: HighController,
  bindings: {
    title: "<",
    players: "<",
  },
});
