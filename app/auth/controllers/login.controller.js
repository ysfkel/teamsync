import Repository from '../../repo/repository.generic';
 
 class loginController{
     constructor(accountService){
         'ngInject'
         this.accountService=accountService;
        var repo=new Repository(accountService);
        this.name='YUSUF KELO'
         console.log('i am profile')
     }
 }

export default loginController;






