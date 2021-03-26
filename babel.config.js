module.exports = function(api) {
  api.cache(true);
  return {
    plugins: [
        [ 'module-resolver',
          {
            root: ['./src'],
            extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
            alias: {
              "@components": "./src/components",
              "@hooks": "./src/hooks",
              "@screens": "./src/screens",
              "@containers": "./src/containers"
            }
          }
       ]
    ],
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },

  };
};