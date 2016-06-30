
import Repository from '../../repo/repository.generic';

class AuthCtr{
    constructor($state,UserService){
        'ngInject';
        this.title=$state.current.title;
        this.authType=$state.current.name.replace('app.','');
        this.name=this.authType;
        
        let view=this.setView(this.authType);
        this.action=view.action;
        this.authInfo=view.info;
        this.userService=UserService;
        
    }
    
    submitForm(){
        var repo=new Repository(this.userService);
        console.log('formsub',repo)
        repo.authenticate('login')
       // this.isSubmitting=true;
    }
    
    setView(stateName){
        switch(stateName){
            case 'login':{
                return  {
                    action:'app.register',
                    info:'Need an account?'
                }
            }
            case 'register':{
                   return  {
                    action:'app.login',
                    info:'Have an account?'
                }
            }
        }
    }
}



export default AuthCtr;