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
            }
        ]
        // loaders:[
        //      { 
        //          test:/\.js$/,
        //          exclude:/node_modules/,
        //          loader:'babel',
        //          query:{
        //              presets:['es2015']
        //          }
        //      }
        // ]
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