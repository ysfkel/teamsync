export default class User{
    constructor(AppConstants,$http){
        'ngInject';
        this.current=null;
        this.AppConstants=AppConstants;
        this.service=$http;
        this.token=null;
        console.log('appConst',AppConstants.api)
    }
    authenticate(type,credentials){
        console.log('i am authenticating')
        let route=(type==='login')?'/login':'/register'; 
        let api_prefix=this.AppConstants.api.prefix;
        let api_version=this.AppConstants.api.version;
        let server=this.AppConstants.server;
        let uri=server+api_prefix+'/'+api_version+route;
        return this.service({
           url:uri,
           method:'POST',
           data:{
               user:credentials
           } 
        }).then((res)=>{
            this.current=res.user;
            this.token=res.token
            return res;
        })
    }
}