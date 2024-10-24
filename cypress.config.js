// cypress.config.js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Configura la ruta base para las pruebas
    baseUrl: 'http://localhost:3000',
    requestTimeout: 30000, // 30 segundos
    responseTimeout: 30000, // 30 segundos
    supportFile: 'cypress/support/index.js', // Asegúrate de que este archivo exista
  },
});
