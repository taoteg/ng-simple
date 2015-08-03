angular
  .module('app')
  .factory('HTTPInterceptor', HTTPInterceptor);

function HTTPInterceptor(Storage, $q, $injector) {
  return {
    request: (config) => {
      var user = Storage.get('user');

      if (user) {
        config.headers.Authorization = `Bearer ${user.accessToken}`;
      }

      return config;
    },
    responseError: (rejection) => {
      var $state = $injector.get('$state');
      if (rejection.status == 401 && $state.current.name != 'login') {
        $state.go('login');
      }

      return $q.reject(rejection);
    }
  };
}