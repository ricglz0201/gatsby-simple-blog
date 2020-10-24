module.exports = {
  presets: [
    'babel-preset-gatsby',
    '@babel/preset-flow'
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          components: './src/components',
          context: './src/context',
          utils: './src/utils',

          config: './config',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-react-remove-prop-types'],
    },
  },
};
