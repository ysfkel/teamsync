var app=require('./modules/app');
require('./security')(app);
require('./products')(app);
require('./router')(app);
require('./repo')(app);

require('./products/directives/repo')(app);
require('./products/directives/list')(app);
