import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import moment from 'moment';

// Dependencies
/*import 'webpack-jquery-ui';*/
import 'angular-animate';
import 'angular-cookies';
import 'angular-translate';
import 'angular-loading-bar';
import 'angular-route';
import 'angular-ui-router';
import 'ng-dialog';
import 'jsonformatter';
import 'angular-ui-sortable';
import 'angular-ui-tree';
import 'angular-filter';
import 'eonasdan-bootstrap-datetimepicker';
import ngFileSaver from 'angular-file-saver';

// Modules
import homeModule from './home/home.module';
import coreModule from '../core/core.module';

// App routes
import appRoutes from './app.routes';

const appModule = angular.module('concessionaire-app', [
  'ngAnimate',
  'ngCookies',
  'ui.router',
  'angular-loading-bar',
  'cfp.loadingBar',
  'pascalprecht.translate',
  'ngDialog',
  'jsonFormatter',
  'ui.sortable',
  'angular.filter',
  'ui.tree',
  ngFileSaver,
  homeModule.name,
  coreModule.name,
]);

appModule.constant('moment', moment);

appModule.config([
  '$qProvider',
  '$translateProvider',
  'cfpLoadingBarProvider',
  '$urlRouterProvider',
  '$stateProvider',
  '$locationProvider',
  (
    $qProvider,
    $translateProvider,
    cfpLoadingBarProvider,
    $urlRouterProvider,
    $stateProvider,
    /* $locationProvider, */
  ) => {
    /* $locationProvider.html5Mode({
      enabled: true,
      requireBase: false,
    }); */

    $translateProvider.preferredLanguage('es');

    $qProvider.errorOnUnhandledRejections(false);

    // Loading bar
    cfpLoadingBarProvider.includeSpinner = false;
    cfpLoadingBarProvider.latencyThreshold = 500;
    cfpLoadingBarProvider.loadingBarTemplate = '<div id="loading-bar"><div class="bar"></div></div>';

    // Initial Routes
    appRoutes($urlRouterProvider, $stateProvider);
  },
]);
