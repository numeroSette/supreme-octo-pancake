module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@user': './src/app/user',
        '@file': './src/app/file',
        '@utils': './src/utils',
      },
    }],
  ],
  ignore: [
    '**/*.spec.ts',
    '**/*.test.ts',
  ],
};
