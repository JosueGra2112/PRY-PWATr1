// cypress/support/index.js

// Importa el soporte de cobertura de código para Cypress
import '@cypress/code-coverage/support';

// Evita que Cypress falle si hay excepciones no capturadas
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
