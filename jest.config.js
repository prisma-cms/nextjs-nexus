module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  testMatch: ['**/__tests__/**/*.test.(ts|tsx|js)'],
  testPathIgnorePatterns: [
    '<rootDir>[/\\\\](node_modules|.next|packages)[/\\\\]',
  ],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  watchPathIgnorePatterns: ['.*/generated/'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png|jpg|jpeg|ico)$':
      '<rootDir>/__tests__/__mocks__/fileMock.js',
  },
  modulePaths: ['<rootDir>'],
  testURL: 'http://localhost:3000',
  preset: 'ts-jest/presets/js-with-babel',
  // https://github.com/facebook/jest/issues/1211#issuecomment-559561044
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,jsx,d.ts,d.tsx}',
    '!**/node_modules/**',
    '!**.next/**',
    '!**/dist/**',
    '!**/coverage/**',
    '!**/stories/*.stories.{ts,tsx}',
    '!**/storybook-static/**',
    '!**/generated/**',
  ],
}
