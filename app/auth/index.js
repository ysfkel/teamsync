import angular from 'angular';
import authConfig from './config';
import authController from './controllers/auth.controller';
import userService from '../services/user.service';

import '../repo'

let authModule=angular.module('app.auth',['app.repo']);

authModule.config(authConfig);
authModule.controller('authController',authController);
authModule.service('UserService',userService);



export default authModule;
