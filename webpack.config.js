var config = {
    entry: './main.js',
    output: {
       path:'/',
       filename: 'index.js',
    },
    devServer: {
       inline: true,
       port: 8080,
       historyApiFallback:true
    },
    
    module: {
        loaders: [
            {
               test: /\.jsx?$/,
               exclude: /node_modules/,
               loader: 'babel-loader',
               query: {
                  presets: ['es2015', 'react'],
               }
            },
            {
              test: /\.(ttf|eot|svg|png|gif|jpg|pdf|pcbdoc|zip)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
              loader: "file-loader?name=[name].[ext]"
            },


            {
                test: /\.css$/,
                loaders: ["style-loader","css-loader"]
            }
            
         ]
    }
 }
 module.exports = config;