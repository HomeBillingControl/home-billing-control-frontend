class LoginControler {
  constructor() {
    this.init();
  }

  init() {
    this.appName = "Home Billing Control";
    this.msg = "Sign in to start your session";
  }
}

export const Login = {
  template: require('./login.html'),
  controller: LoginControler,
  bindings: {

  }
};