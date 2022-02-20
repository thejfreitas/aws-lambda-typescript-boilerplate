import AwsSamPlugin from 'aws-sam-webpack-plugin';

const awsSamPlugin = new AwsSamPlugin();

const config = {
  // Loads the entry object from the AWS::Serverless::Function resources in your
  // SAM config. Setting this to a function will
  entry: () => awsSamPlugin.entry(),
  output: {
    filename: '[name]/app.js',
    libraryTarget: 'commonjs2',
    path: __dirname + '/.aws-sam/build/',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  target: 'node',

  // AWS recommends always including the aws-sdk in your Lambda package but excluding can significantly reduce
  // the size of your deployment package. If you want to always include it then comment out this line. It has
  // been included conditionally because the node10.x docker image used by SAM local doesn't include it.
  externals: process.env.NODE_ENV === 'development' ? [] : ['aws-sdk'],

  // Set the webpack mode
  mode: process.env.NODE_ENV || 'production',
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
  },

  // Add the AWS SAM Webpack plugin
  plugins: [awsSamPlugin],
};

export default config;
