angular
  .module('app')
  .controller('MainController', MainController);

function MainController(User, $state) {
  let vm = this;
  vm.logout = logout;

  function logout() {
    User.logout();
    $state.go('login');
  }
}