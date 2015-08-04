angular
  .module('app')
  .factory('List', List);

function List(API_URL, $http) {
  return {
    items: items
  };

  function items() {
    return $http.get(`${API_URL}/items`);
  }
}