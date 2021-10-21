module.exports = {
  displayName: 'Example Tests',
  testEnvironment: 'node', // 'jsdom'
  testMatch: ['<rootDir>/**/*.test.js'],
  transformIgnorePatterns: ['node_modules/(?!.*?/es/.*\\.js)'],
  collectCoverage: true,
  coverageReporters: ['json', 'html', 'lcov'],
  setupFilesAfterEnv: ['<rootDir>/src/test-utils/suiteSetup.js'],
  coveragePathIgnorePatterns: ['/node_modules/', '/*.test.js/'],
};
