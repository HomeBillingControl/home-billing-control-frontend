/**
 * Created by crist on 03/05/2017.
 */
import angular from 'angular';
import 'angular-ui-router';
import 'angular-ui-grid/ui-grid.js';
import 'angular-ui-grid/ui-grid.css';
import 'admin-lte/bootstrap/css/bootstrap.min.css';
import 'admin-lte/dist/css/AdminLTE.min.css';
import 'admin-lte/dist/css/skins/_all-skins.min.css';
import 'admin-lte/plugins/iCheck/square/blue.css';
import 'font-awesome/css/font-awesome.min.css';

import { App } from './app/containers/app';
import { Login } from './app/containers/login/login';
import { Button } from "./app/components/button/button";
import routesConfig from './app.routes';
import runConfig from './app.run';

angular.module('homeControl', ['ui.router', 'ui.grid'])
  .component('app', App)
  .component('login', Login)
  .component('cmpButton', Button)
  .config(routesConfig)
  .run(runConfig);