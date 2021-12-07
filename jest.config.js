module.exports = {
  preset: "react-native",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  collectCoverageFrom: [
    '**/src/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/__tests__/**'
  ],
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  coverageDirectory: '<rootDir>/coverage',
  testResultsProcessor: 'jest-sonar-reporter',
  testMatch: ['**/*.spec.ts', '**/*.spec.tsx', '**/*.test.ts', '**/*.test.tsx'],
  testTimeout: 10000,
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
    '^tests/(.*)$': '<rootDir>/__tests__/$1'
  },
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js'
  ],
  setupFilesAfterEnv: ['<rootDir>/__tests__/setup.jest.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
  ],
}