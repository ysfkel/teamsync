module.exports=function(app){
    app.factory('bandsCollection',repo);
    function repo(){
        return [
            {name:'lumia',color:'black',price:'4,111'},
            {name:'Iphone',color:'white',price:'4,111'}
        ]
    }
}