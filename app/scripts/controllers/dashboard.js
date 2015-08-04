angular
  .module('app')
  .controller('DashboardController', DashboardController);

function DashboardController(items) {
  let vm = this;
  vm.items = items;
}