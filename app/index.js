import angular from 'angular';
import'angular-ui-router';
import './auth';
import appConfig from './config/app.config';
import appRun from './config/app.run';
import appConstants from './config/app.constants';

const requires=[
    'ui.router',
    'app.auth'
]


angular.module('app',requires);
angular.module('app').config(appConfig);
angular.module('app').constant('AppConstants',appConstants);
//angular.module('app').service('',);
angular.module('app').run(appRun);

angular.bootstrap(document,['app'])

