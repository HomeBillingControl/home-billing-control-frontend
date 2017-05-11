/**
 * Created by crist on 06/05/2017.
 */
class SystemConsts {
  constructor() {
    this.init();
  }

  init() {
    this.appName = 'Home Billing Control';
    this.gitHub = 'https://github.com/csvinhal';
    this.version = '1.0.0';
    this.bodyClass = '';
  }
}

export default angular.module('consts', ['ui.router'])
  .constant('constants', new SystemConsts)
  .name;