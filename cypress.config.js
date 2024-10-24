// cypress.config.js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/',
    supportFile: 'cypress/support/index.js', // Asegúrate de que este archivo exista
  },
});
