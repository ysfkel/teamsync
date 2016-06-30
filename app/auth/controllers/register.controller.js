import Repository from '../../repo/repository.generic';

class Register{
    constructor(registerRepository){
        'ngInject';
        this.service=registerRepository;
        console.log('this is register service')
    }
}


export default Register;