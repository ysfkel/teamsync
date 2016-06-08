var path=require('path');
var bodyParser = require('body-parser');
var bugApi=require('./api/bug.api');
var app_secret = require('./config/app.infra.config').app_secret;
var securityApi=require('./api/security')(app_secret);
var passport=require('passport');

module.exports=function(app,express){   
   app.use(express.static(path.join(__dirname, 'public')));
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended:false}));
   app.use(passport.initialize());
   app.use(passport.session());
   require('./config/passport')(passport);
   //plug apis
   app.use('/api',bugApi);
   app.use('/api/auth',securityApi);
}