module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest', // Use babel-jest to transpile ES modules
  },
  testEnvironment: 'node', // Set test environment to Node.js
};