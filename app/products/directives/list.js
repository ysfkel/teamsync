module.exports=function(app){
    app.directive('bandsList', function bandsList(bandsCollection){
        return {
            templateUrl:'products/directives/list.html',
            restrict:'E',
            controller:function($scope){
                $scope.bands=bandsCollection;
            }
        }
    });
   
}