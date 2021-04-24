const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry:  {
    'main': './src/index.js',
  },

  output: {
    path: path.join(__dirname, "/dist"),
    filename: '[name].js',
  },

  mode: 'development',

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /(\.css|\.sass)$/i,
        use: [
          {
            loader: "vue-style-loader",
          },
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "autoprefixer",
                    {
                      'browsers': ['> 1%', 'last 2 versions']
                    },
                  ],
                ],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              sassOptions: {
                indentedSyntax: true
              },
              additionalData: `
                @import "./src/sass/_vars.sass"
                @import "./src/sass/_reset.sass"
                @import "./src/sass/_extends.sass"
                @import "./src/sass/_mixins.sass"
              `,
            }
          },
        ],
      },
      {
        test: /\.vue$/i,
        loader: 'vue-loader',
      }
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({filename: "css/styles.css"}),

    // new CopyPlugin({
    //   patterns: [
    //     { from: "./src/img", to: "img" },
    //   ],
    // }),

    new HtmlWebpackPlugin(
      {
        template: './public/index.html',
      }
    ),

    new VueLoaderPlugin(),
  ],

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          keep_classnames: true,
          keep_fnames: true
        }
      })
    ]
  },

  devServer: {  // configuration for webpack-dev-server
    // contentBase: './src/public',  //source of static assets
    port: 8080, // port to run dev-server
    open: false,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: {'^/api': ''},
        secure: false,
        changeOrigin: true,
      }
    }
  }
};