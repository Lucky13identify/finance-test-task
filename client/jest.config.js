module.exports = {
  // Массив файлов, которые Jest будет тестировать
  testMatch: ['/__tests__//*.js', '**/?(*.)+(spec|test).js'],

  // Директории, в которых Jest будет искать тестовые файлы
  roots: ['<rootDir>/src'],

  // Модули, которые Jest будет использовать для трансформации кода
  transform: {
    '^.+\\.js$': 'babel-jest',
  },

  // Плагины Jest
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],

  // Какие файлы исключить из тестов
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  transformIgnorePatterns: ['/node_modules/(?!d3-(array|format))'],
};
