angular
  .module('app')
  .controller('SignUpController', SignUpController);

function SignUpController(User, $state) {
  let vm = this;
  vm.submit = submit;

  function submit(params) {
    User.signup(params).then(response => {
      $state.go('dashboard');
    }).catch(err => {
      alert('Try again!');
    });
  }
}