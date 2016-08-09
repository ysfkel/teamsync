import Repository from '../../repo/repository.generic';
 
 class loginController{
     constructor(accountService){
         'ngInject'
         this.accountService=accountService;
        var repo=new Repository(accountService);
        this.name='YUSUF KELO'
     }
 }

export default loginController;






