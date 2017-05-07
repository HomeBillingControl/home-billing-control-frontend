/**
 * Created by crist on 06/05/2017.
 */
import {Login} from "./login/login";

export default angular
  .module('containers', ['ui.router'])
  .component('loginForm', Login)
  .name;