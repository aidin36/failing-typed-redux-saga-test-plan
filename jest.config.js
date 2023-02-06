module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[t]sx?$': [
      'ts-jest',
      {
        babelConfig: '.babelrc',
      },
    ],
  },
}
