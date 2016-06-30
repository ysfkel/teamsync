function AppRun($rootScope){
    'ngInject';
    $rootScope.$on('$stateChangeSucccess',function(event,toState){
        $rootScope.setPageTitle(toState.title);
    });
    
     $rootScope.setPageTitle=(title)=>{
         $rootScope.pageTitle='';
         if(title){
             $rootScope.pageTitle=title;
         }
     }
}

export default AppRun;