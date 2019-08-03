module.exports = {
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '@testing-library/react/cleanup-after-each'
  ],
  moduleNameMapper: {
    '\\.modules\\.css': 'identity-obj-proxy',
    '\\.css$': require.resolve('./src/testUtil/style-mock.js'),
    '\\.(css|jpg|png|svg)$': '<rootDir>/src/testUtil/image-mock.js'
  }
};
