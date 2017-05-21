class LoginControler {
  constructor($rootScope, $state) {
    this._$rootScope = $rootScope;
    this._$state = $state;
    this.init();
  }

  init() {
    this.appName = this._$rootScope.consts.appName;
    this._$rootScope.consts.bodyClass = 'hold-transition login-page';
    this.msg = "Sign in to start your session";
  }

  login() {
    this._$state.go('app');
  }
}

export const Login = {
  template: require('./login.html'),
  controller: LoginControler,
  bindings: {}
};