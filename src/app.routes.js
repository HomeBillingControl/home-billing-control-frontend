/**
 * Created by crist on 03/05/2017.
 */
export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/login');
  $locationProvider.html5Mode(false);
  /*$locationProvider.html5Mode({
   enabled: false,
   requireBase: true
   }).hashPrefix('!');*/

  $stateProvider
    .state({
      name: 'login',
      url: '/login',
      views: {
        "root": {
          component: 'loginForm'
        }
      }
    })
    .state({
      name: 'register',
      url: '/register',
      views: {
        "root": {
          component: 'registerForm',
        }
      }
    })
    .state({
      name: 'app',
      url: '/',
      views: {
        "root": {
          component: 'homeForm',
        }
      }
    })
    .state({
      name: 'app.account',
      url: 'account',
      component: 'accountForm',
    });
}