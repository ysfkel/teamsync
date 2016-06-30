function AppConfig($stateProvider,$urlRouterProvider,$httpProvider){
    'ngInject';
    $stateProvider
    .state('app',{
        'abstract':true,
        'template':require('../layout/app.view.html'),
    });
   
    $urlRouterProvider.otherwise('/');
    
delete $httpProvider.defaults.headers.common['X-Requested-With'];
$httpProvider.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
$httpProvider.defaults.headers.common["Accept"] = "application/json";
$httpProvider.defaults.headers.common["content-type"] = "application/json";
}

export default AppConfig;