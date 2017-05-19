/**
 * Created by crist on 03/05/2017.
 */
export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(false);
  /*$locationProvider.html5Mode({
   enabled: false,
   requireBase: true
   }).hashPrefix('!');*/

  $stateProvider
    .state({
      name: 'login',
      url: '/',
      component: 'loginForm'
    })
    .state({
      name: 'home',
      url: '/home',
      component: 'homeForm'
    })
    .state({
      name: 'register',
      url: '/register',
      component: 'registerForm'
    });
}