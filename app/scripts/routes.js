angular
  .module('app')
  .config(routes);

function routes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('root', {
      abstract: true,
      url: '',
      template: '<ui-view />'
    })
    .state('login', {
      parent: 'root',
      url: '/login',
      controller: 'LoginController as vm',
      templateUrl: 'templates/login.html'
    })
    .state('signup', {
      parent: 'root',
      url: '/signup',
      controller: 'SignUpController as vm',
      templateUrl: 'templates/signup.html'
    })
    .state('main', {
      parent: 'root',
      abstract: true,
      url: '',
      controller: 'MainController as main',
      templateUrl: 'templates/main.html',
      resolve: {
        authCheck: (User, $location) => {
          if (!User.current()) {
            $location.path('/login');
          }
        }
      }
    })
    .state('dashboard', {
      parent: 'main',
      url: '/',
      controller: 'DashboardController as vm',
      templateUrl: 'templates/dashboard.html',
      resolve: {
        items: (List) => List.items().then(res => res.data)
      }
    })
    .state('main.another', {
      url: '/another',
      template: 'Another Page'
    });

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}