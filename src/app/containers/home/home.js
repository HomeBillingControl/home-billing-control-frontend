/**
 * Created by crist on 06/05/2017.
 */
class HomeControler {
  constructor($rootScope, $state) {
    this._$rootScope = $rootScope;
    this._$state = $state;
    this.init();
  }

  init() {
    this.appName = this._$rootScope.consts.appName;
    this._$rootScope.consts.bodyClass = 'skin-blue sidebar-mini';
  }
}

export const Home = {
  template: require('./home.html'),
  controller: HomeControler,
  bindings: {}
};