angular
  .module('app')
  .factory('Storage', Storage);

function Storage($cookieStore, localStorageService) {
  return {
    get: get,
    set: set,
    remove: remove
  };

  function get(key) {
    let value;

    if ($cookieStore.get(key)) {
      value = JSON.parse($cookieStore.get(key));
    } else {
      value = localStorageService.get(key);
    }

    return value;
  }

  function set(key, value, permanent = false) {
    if (permanent) {
      localStorageService.set(key, value);
    } else {
      $cookieStore.put(key, JSON.stringify(value));
    }
  }

  function remove(key) {
    $cookieStore.remove(key);
    localStorageService.remove(key);
  }
}