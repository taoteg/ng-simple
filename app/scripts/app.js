angular
  .module('app', [
    'ui.router',
    'ngCookies',
    'LocalStorageModule',
    'app.config'
  ])
  .config(config);

function config($httpProvider) {
  $httpProvider.interceptors.push('HTTPInterceptor');
}