// cypress/e2e/example.cy.js
describe('Pruebas de la Aplicación', () => {
    it('Visita la página de inicio y verifica el contenido', () => {
        cy.visit('http://localhost:3000'); // Asegúrate de que este sea el correcto
        cy.contains('SISTEMA INTEGRAL DE GESTION ADMINISTRATIVA'); // Verifica que el título esté presente
    });

    it('Visita la página de Calendario y verifica el contenid', () => {
        cy.visit('http://localhost:3000/#/Calendario'); // Asegúrate de que este sea el correcto
        cy.contains('Calendarios escolares'); // Verifica que el título esté presente
    });

    it('Visita la página de Bitácora y verifica los datos', () => {
        cy.visit('http://localhost:3000/#/Bitacoras'); // Asegúrate de que este sea el correcto
        cy.contains('BITÁCORA'); // Verifica que el título esté presente
    });

    it('Visita la página de Boletín y verifica el los datos', () => {
        cy.visit('http://localhost:3000/#/Boletin'); // Asegúrate de que este sea el correcto
        cy.contains('BOLETÍN'); // Verifica que el título esté presente
    });
});
