var mongoose=require('mongoose');
var data_connection=require('./config/app.infra.config').data_source;

var port=process.env.PORT || 3000;

module.exports=function(app){   
 startDb();
 startServer(app);
}


function startDb(){
    mongoose.connect(data_connection,function(){
          console.log('database started..');
    });
}


function startServer(app){
    app.listen(port,function(){
    console.log('server started')
  })
}