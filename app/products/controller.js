module.exports=function(app){
    app.controller('myController',function($scope,bugRepository){
        $scope.name='THIS IS MY CONTROLLER!'
        console.log(bugRepository)
    })
}