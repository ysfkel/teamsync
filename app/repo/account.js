module.exports=function(app){
    
   app.factory('accountService',accountService);
    
}


accountService.$inject=['$resource'];

function accountService($resource){
    
    return $resource('/api/v1/register/:id',{id:'@id'},{update:{method:'PUT'}} );

}