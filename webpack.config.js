var webpack=require('webpack');

module.exports={
    context:__dirname+'/app',
  // entry:'./index.js',
    entry:[
      'webpack-dev-server/client?http://127.0.0.1:5000/',
      'webpack/hot/only-dev-server'
     ,'./index' // './index.js'  
    ],
    output:{
        path:__dirname+'/app',
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {
                test:/\.html$/,
                loader:'raw'
            },
            {
              test:/\.css$/,
              loader:'style!css',
              exclude:/(node_modules|bower_components)/  
            },
            
            {
                test:/\.jsx?$/,
                loader:'babel',
                exclude:/(node_modules|bower_components)/,
                query:{
                    presets:['es2015']
                }
            },
            {
                test: /src.*\.js$/, 
                  exclude:/(node_modules|bower_components)/,
                loaders: ['ng-annotate', 'babel-loader']
            }
        ]
   
    },
    resolve:{
        modulesDirectories:['node_modules','src'],
        extension:['','.js']
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    devServer:{
        hot:true,
        proxy:{
            '*':'http://localhost:3000'
        }
    }
}