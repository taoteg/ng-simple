angular
  .module('app')
  .factory('User', User);

function User(API_URL, $http, Storage) {
  return {
    login: login,
    signup: signup,
    logout: logout,
    current: current
  };

  function login(params) {
    return $http.post(`${API_URL}/tokens`, params).then(response => {
      Storage.set('user', response.data);
      return response;
    });
  }

  function signup(params) {
    return $http.post(`${API_URL}/users`, params).then(response => {
      Storage.set('user', response.data);
      return response;
    });
  }

  function logout() {
    Storage.remove('user');
  }

  function current() {
    return Storage.get('user');
  }
}