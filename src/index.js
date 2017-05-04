/**
 * Created by crist on 03/05/2017.
 */
import angular from 'angular';
import 'angular-ui-router';
import 'angular-ui-grid/ui-grid.js';
import 'angular-ui-grid/ui-grid.css';
import { App } from './app/containers/app';
import { Login } from './app/containers/login/login';
import routesConfig from './app.routes';
import runConfig from './app.run';

angular.module('weather-forecast', ['ui.router', 'ui.grid'])
  .component('app', App)
  .component('login', Login)
  .config(routesConfig)
  .run(runConfig);