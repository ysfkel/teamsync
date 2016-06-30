
class AccountService{
    
    constructor($http){
        'ngInject'
        this.service=$http;
    }
    
    save(entity){
        return this.service.post('/api/v1/register',entity);
    }
    
}

export default AccountService;
