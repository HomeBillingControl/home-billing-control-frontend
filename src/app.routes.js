/**
 * Created by crist on 03/05/2017.
 */
export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  }).hashPrefix('!');
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state({
      name: 'login',
      url: '/',
      component: 'login'
    });
}