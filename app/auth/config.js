function SecurityConfig($stateProvider){
    'ngInject';
    $stateProvider
    .state('app.login',{
        url:'/login',
        template:require('./templates/auth.html'),
       controller:'authController',
        controllerAs:'$ctrl',
        title:'Login'
    })
    .state('app.register',{
        url:'/register',
       template:require('./templates/auth.html'),
       controller:'authController',
       controllerAs:'$ctrl',
       title:'Register'
    })

}


export default SecurityConfig;    