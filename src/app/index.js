'use strict';
/* globals window */

angular.module('vleApp', [
    'ngAnimate',
    'ngCookies',
    'ngSanitize',
    'ngTouch',
    'ngDragDrop',
    'monospaced.elastic',
    'zeroclipboard',
    'ui.router',
    'Chronicle'])
  .constant('_', window._)
  .constant('jQuery', window.$)
  .constant('vl', window.vl)
  .constant('vg', window.vg)
  .constant('Papa', window.Papa)
  .constant('tv4', window.tv4)
  .constant('consts', {
    addCount: true, // add count field to Dataset.dataschema
    debug: true
  })
  .config(['uiZeroclipConfigProvider', function(uiZeroclipConfigProvider) {

    // config ZeroClipboard
    uiZeroclipConfigProvider.setZcConf({
      swfPath: 'bower_components/zeroclipboard/dist/ZeroClipboard.swf'
    });
  }])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  });
