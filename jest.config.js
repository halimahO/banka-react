module.exports = {
  setupFilesAfterEnv: [
    '<rootDir>/src/__tests__/setupTests.js',
    '@testing-library/jest-dom/extend-expect',
    '@testing-library/react/cleanup-after-each'
  ],
  setupFiles: ['<rootDir>/node_modules/regenerator-runtime/runtime'],
  moduleNameMapper: {
    '\\.modules\\.css': 'identity-obj-proxy',
    '\\.css$': require.resolve('./src/testUtil/style-mock.js'),
    '\\.(css|jpg|png|svg)$': '<rootDir>/src/testUtil/image-mock.js'
  }
};
