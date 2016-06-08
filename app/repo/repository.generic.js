function Repository(service){
    console.log('i am repo')
    this.service=service;
}

Repository.prototype.add=function(entity){
        console.log('i am add repo')
  return this.service.save(entity);
}

Repository.prototype.getAll=function(){
    return this.service.query();
}

Repository.prototype.getById=function(id){
    return this.service.get({id:id});
}

Repository.prototype.update = function (id, entity) {

   return this.service.update({ id: id }, entity)
}

Repository.prototype.remove = function (id) {
   return this.repo.delete({ Id: id })
}

Repository.prototype.getByParams = function (params) {

   return this.repo.get(params);
}

module.exports=Repository;

    