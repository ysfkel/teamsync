import Repository from '../../repo/repository.generic';

class Register{
    constructor(registerRepository){
        'ngInject';
        this.service=registerRepository;
    }
}


export default Register;