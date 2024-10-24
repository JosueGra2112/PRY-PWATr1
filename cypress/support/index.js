// cypress/support/index.js
// Este archivo se ejecuta antes de los tests y se puede usar para agregar configuraciones globales.

Cypress.on('uncaught:exception', (err, runnable) => {
    // Evita que Cypress falle si hay excepciones no capturadas
    return false;
  });
  