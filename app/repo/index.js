import angular from 'angular';
import account from './account';
import registerRepository from './register.repo';


let app=angular.module('app.repo',[]);
app.service('accountService',account);
app.service('registerRepository',account);

export default app;

