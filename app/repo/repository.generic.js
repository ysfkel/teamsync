export default class Repository{
    constructor(service){
               console.log('hi i am es6 repo2 :)')
        this.service=service;
    }
    
    authenticate(type,credentials){
        return this.service.authenticate(type,credentials);
    }
    
    add(entity){
      return this.service.save(entity);
    }
    
    getAll(){
        return this.service.query();
    }

    getById(id){
        return this.service.get({id:id});
    }

    update(id, entity) {

    return this.service.update({ id: id }, entity)
    }

    remove (id) {
    return this.repo.delete({ Id: id })
    }

    getByParams(params) {

    return this.repo.get(params);
    }
}
