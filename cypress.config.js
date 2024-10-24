// cypress.config.js
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // Configura la ruta base para las pruebas
    baseUrl: 'http://localhost:3000/', // Cambia esto según sea necesario
    supportFile: 'cypress/support/index.js', // Asegúrate de que este archivo exista
  },
});
