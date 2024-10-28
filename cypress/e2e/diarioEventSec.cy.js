// cypress/e2e/diarioEventSec.cy.js

describe('Prueba E2E para el Registro de Datos en DiarioEventSec', () => {
    // Antes de cada prueba, realiza el inicio de sesión
    beforeEach(() => {
        // Visita la página de login
        cy.visit('http://localhost:3000/#/Login');
        
        // Selecciona el cargo "Secretario"
        cy.get('#cargo').select('Secretario');
        
        // Ingresa el usuario y la contraseña
        cy.get('#username').type('Jox'); // Reemplaza 'tu_usuario' con el usuario real
        cy.get('#password').type('Perro2112'); // Reemplaza 'tu_contraseña' con la contraseña real

        // Haz clic en el botón de iniciar sesión
        cy.get('button').contains('Acceder').click();

        // Verifica que se haya redirigido correctamente al área de "Secretario"
        cy.url().should('include', '/SesionS'); // Cambia la URL según corresponda
    });

    it('Registra una nueva actividad correctamente', () => {
        // Visita la ruta de la página DiarioEventSec después del inicio de sesión
        cy.visit('http://localhost:3000/#/DiariEventSec');

        // Selecciona el tipo de diario
        cy.get('select[name="tipoDiario"]').select('Boletín');

        // Llena el campo de Asunto (título)
        cy.get('input[name="titulo"]').type('Reunión de Evaluación');

        // Selecciona la fecha
        cy.get('input[name="fecha"]').type('2024-12-15'); // Usa un formato válido para tu entorno

        // Selecciona la hora
        cy.get('input[name="thora"]').type('10:30');

        // Llena el campo de descripción
        cy.get('textarea[name="descripcion"]').type('Evaluación del progreso semestral de los estudiantes.');

        // Haz clic en el botón de verificar datos
        cy.get('button').contains('Verificar datos').click();

        // Verifica que aparezca el diálogo de confirmación
        cy.contains('Verifique que los datos estén correctos').should('be.visible');

        // Haz clic en el botón de aceptar en el diálogo de confirmación
        cy.get('button').contains('Aceptar').click();

        // Verifica que se muestra el mensaje de éxito tras el registro
        cy.contains('Diario creado exitosamente').should('be.visible');
    });

    it('Muestra un mensaje de error si faltan campos obligatorios', () => {
        // Visita la ruta de la página DiarioEventSec después del inicio de sesión
        cy.visit('http://localhost:3000/#/DiariEventSec');

        // Llena algunos campos pero deja otros vacíos
        cy.get('input[name="titulo"]').type('Reunión Incompleta');

        // Haz clic en el botón de verificar datos
        cy.get('button').contains('Verificar datos').click();

        // Verifica que se muestra una alerta indicando que faltan campos
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Favor de llenar todos los campos para agregar la actividad.');
        });
    });
});
