class RegisterControler {
  constructor($rootScope, $state) {
    this._$rootScope = $rootScope;
    this._$state = $state;
    this.init();
  }

  init() {
    this.appName = this._$rootScope.consts.appName;
    this._$rootScope.consts.bodyClass = 'hold-transition register-page';

    this.user = {};
  }

  save(user) {
    console.log(user);
  }
}

export const Register = {
  template: require('./register.html'),
  controller: RegisterControler,
  bindings: {
  }
};