/**
 * Created by crist on 07/05/2017.
 */
export default class FooterController {
  constructor($rootScope) {
    this._$rootScope = $rootScope;
    this.init();
  }

  init() {
    this.version = this._$rootScope.consts.version;
    this.gitHub = this._$rootScope.consts.gitHub;
  }
}

export const Footer = {
  template: require('./footer.html'),
  controller: FooterController,
  bindings: {}
};
