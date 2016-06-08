
module.exports=function(app){
    app.factory('bugRepository',repo)
    function repo($http){
        return $http.get('api/v1/bugs');
    }
}