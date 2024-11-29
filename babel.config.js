module.exports = {
    presets: ['babel-preset-expo'],  // O preset do Expo para React Native
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],  // Define a raiz do projeto
          alias: {
            '@': './src',  // Mapeia o alias "@" para o diretório "src"
          },
        },
      ],
    ],
  };
  