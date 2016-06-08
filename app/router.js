module.exports=function(app){
    
    app.config(function($stateProvider,$urlRouterProvider){
        $stateProvider
        .state('login',{
            url:'/login',
            template:require('./security/templates/login.html'),
            controller:'loginController as loginViewModel',
        //   ,  resolve:{
        //         bugs:function(bugRepository){
        //             console.log('....hiiii')
        //             return bugRepository.get();
        //         }
        //     }
        //
        //
        })
               $urlRouterProvider.otherwise('/not-found')
        
    });
}