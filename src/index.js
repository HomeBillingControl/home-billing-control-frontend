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

import components from './app/components/components';
import containers from './app/containers/containers';
import consts from "./app/app.const";
import routesConfig from './app.routes';
import runConfig from './app.run';

angular.module('homeControl', ['ui.router', 'ui.grid', components, containers, consts])
  .config(routesConfig)
  .run(runConfig);