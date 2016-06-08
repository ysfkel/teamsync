
 var Repository= require('../../repo/repository.generic');
 function loginController($scope,accountService){
       var vm=this;
       vm.account={};
       
       var repo=new Repository(accountService);

       vm.login=function(){
           console.log('hi', vm.account)
           //  accountService.post()
        //   repo.add()
       }
 }
    
    
 
 module.exports=function(app){
    app.controller('loginController',loginController)
}






