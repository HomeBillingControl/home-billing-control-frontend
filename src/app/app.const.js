/**
 * Created by crist on 06/05/2017.
 */
class SystemConsts {
  constructor() {
    this.init();
  }

  init() {
    this.appName = 'Home Billing Control';
    this.bodyClass = '';
  }
}

export default angular.module('consts', ['ui.router'])
  .constant('constants', new SystemConsts)
  .name;