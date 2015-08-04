angular
  .module('app')
  .controller('LoginController', LoginController);

function LoginController(User, $state) {
  let vm = this;
  vm.submit = submit;
  vm.testUser = {
    email: 'test@vngrs.com',
    password: 'test'
  };

  function submit(params) {
    User.login(params).then(response => {
      $state.go('dashboard');
    }).catch(err => {
      params.password = '';
      alert('Try again!');
    });
  }
}