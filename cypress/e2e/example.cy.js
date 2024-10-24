describe('My First Test', () => {
    it('Visits the app', () => {
        cy.visit('http://localhost:3000');
        cy.wait(5000); // espera 5 segundos
        cy.contains('SISTEMA INTEGRAL DE GESTION ADMINISTRATIVA', { timeout: 20000 }); // espera 20 segundos
    });
      
});
