module.exports = {
  moduleNameMapper: {
    '^components(.*)': '<rootDir>/components$1',
    '^domains(.*)': '<rootDir>/domains$1',
    '^pages(.*)': '<rootDir>/pages$1',
    '^utils(.*)': '<rootDir>/utils$1',
  },
  testPathIgnorePatterns: [
    '<rootDir>/.fttemplates/',
  ],
};
