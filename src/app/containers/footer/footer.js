/**
 * Created by crist on 07/05/2017.
 */
export default class FooterController {
  constructor($rootScope) {
    this._$rootScope = $rootScope;
  }

  init() {
    this.profile = this._$rootScope.consts.profile;
    this.version = this._$rootScope.consts.version;
  }
}

export const Footer = {
  template: require('./footer'),
  controller: FooterController,
  bindings: {
    profile = '@',
    footerDes = '@',
    divClass = '@',
    footerClass = '@'
  }
};
