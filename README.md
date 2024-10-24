# SIGAfinal
## Descripción
Este repositorio alberga toda la información relacionada con el desarrollo y gestión del sistema SIGA, una plataforma para la administración integral de la escuela. Aquí se gestiona el código del proyecto, lo que permite una integración entre la codificación.

## Desarrolladores
- **Hernández Badillo Álvaro Fernando** - 20210727
- **Granados Cortes Josué** - 20211306
- **Bautista Cardona Jaime** - 20210646

Grupo B - Décimo Cuatrimestre  
Carrera de Ingeniería en Desarrollo y Gestión de Software

## Objetivos
- **Alojar y revisar el código del proyecto:** Mantener el código constantemente revisado y actualizado para evitar errores de codificación.
- **Gestión de tareas e issues:** Facilitar la comunicación de issues y gestionar nuevas tareas para el desarrollo del proyecto.
- **Entregas rápidas y continuas:** Proporcionar entregas frecuentes de valor mediante revisiones constantes del proyecto.

## Metodología
Se eligió la metodología Extreme Programming (XP) debido a la naturaleza cambiante de los requisitos y la necesidad de entregas rápidas. XP promueve la retroalimentación continua y el mejoramiento constante mediante prácticas clave que optimizan el ciclo de vida del desarrollo. 

Entre las prácticas principales de XP se incluyen:
- Iteraciones frecuentes y cortas para desarrollar y entregar funcionalidades de forma ágil.
- Refactorización continua para mejorar la calidad del código sin afectar la funcionalidad.
- Feedback constante para asegurar que el equipo de desarrollo y el cliente estén alineados.

## Herramienta de Control de Versiones y Flujo de Trabajo
Se seleccionó **GitHub** como la herramienta principal de control de versiones. El flujo de trabajo utilizado es de **integración continua (CI)**, lo que asegura que el código que se sube a la rama principal sea estable y libre de errores, gracias a pruebas automatizadas que se ejecutan antes de integrar cualquier cambio.

### Flujo de Trabajo
- Los desarrolladores trabajan en ramas individuales que corresponden a cada nueva funcionalidad o corrección.
- Se ejecutan pruebas automáticas antes de realizar cualquier integración en la rama principal.
- La rama principal contiene el código más estable y actualizado, accesible para todos los miembros del equipo.

## Estrategia de Versionamiento y Gestión de Ramas
El proyecto implementa una estrategia de **versionado continuo (Rolling Release)**, donde se actualiza el software continuamente, garantizando siempre una versión reciente y funcional.

### Estructura de Ramas
- **Main o Master:** Es la rama principal que contiene la versión estable del proyecto.
- **Ramas de características o features:** Cada nueva funcionalidad se desarrolla en una rama independiente, que luego se integra a la rama principal tras pasar las pruebas.

## Estrategia de Despliegue
La estrategia de despliegue seleccionada incluye:
- **Entornos de desarrollo, pruebas y producción:** Cada entorno tiene configuraciones específicas para asegurar la calidad del producto final.
- **Proceso de CI/CD:** Automatización de despliegues a través de GitHub Actions, permitiendo la integración y entrega continua de cambios.

## Clonación del Repositorio
Para comenzar a trabajar con el proyecto, es necesario clonar el repositorio desde GitHub.

```bash
git clone https://github.com/JosueGra2112/SIGAfinal.git
```

## Instalación de Dependencias
Una vez clonado el repositorio, se debe realizar la instalación de las dependencias especificadas en el archivo de configuración del proyecto. Esto garantiza que todos los módulos necesarios para el funcionamiento de SIGA estén disponibles.

### Ejemplo de instalación de dependencias
```bash
npm install
```

## Librerías y Funcionalidades
El proyecto utiliza las siguientes librerías y funcionalidades:

- **Express.js:** Para la creación del servidor y manejo de rutas.
- **MySQL:** Para la interacción con la base de datos.
- **Dotenv:** Para gestionar las variables de entorno.
- **Cors:** Para permitir solicitudes de diferentes dominios.
- **Jest:** Para realizar pruebas unitarias.
## Ejecución del Proyecto
Para ejecutar el proyecto en el entorno de desarrollo local, se necesita iniciar el servidor de desarrollo para visualizar la aplicación en el navegador.

### Ejemplo de inicio del servidor
```bash
npm start
```

## Pruebas y Emulación
Es esencial utilizar herramientas como el Simulador móvil y las herramientas de desarrollo de Google Chrome para verificar que la aplicación sea completamente responsiva y funcione correctamente en dispositivos móviles. Estas herramientas permiten emular diferentes tamaños de pantalla y dispositivos, garantizando que la experiencia del usuario sea óptima en todos los entornos.

Además, se recomienda la automatización de pruebas en el flujo de integración continua para identificar posibles errores y mantener la calidad del código.

## Instalación de la PWA en React
Para convertir tu aplicación React en una Progressive Web App (PWA), sigue estos pasos:

1. **Crear una nueva aplicación React** (si aún no lo has hecho):
   ```bash
   npx create-react-app nombre-de-tu-app
   ```
2. **Instalar el Workbox Webpack Plugin**
 Este plugin es necesario para habilitar las funcionalidades de la PWA, como el caching de archivos y el manejo del service worker.

    ```bash
    npm install workbox-webpack-plugin --save-dev
    ```


3. **Modificar el archivo src/index.js**
Cambia el registro del service worker en src/index.js de la siguiente manera:

    ```bash
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App';
    import reportWebVitals from './reportWebVitals';
    import * as serviceWorkerRegistration from './serviceWorkerRegistration';

    ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
    );

    // Cambia 'serviceWorker.unregister()' por 'serviceWorker.register()'
    serviceWorkerRegistration.register();

    reportWebVitals();
    ```

4. **Configurar el archivo public/manifest.json**
Asegúrate de que tu archivo public/manifest.json contenga la siguiente información:

    ```bash
{
  "short_name": "NombreCorto",
  "name": "Nombre Completo de la Aplicación",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
    ```
5. **Construir y ejecutar la aplicación**
Ahora puedes construir tu aplicación y ejecutarla:

    ```bash
    Copiar código
    npm run build
    npm start
    ```

**Al seguir estos pasos, la aplicación React estará configurada como una PWA**
permitiendo características como acceso offline, instalación en dispositivos y notificaciones push.

Esta versión incluye la mención de que el `workbox-webpack-plugin` es necesario para el funcionamiento de la PWA. Si necesitas más ajustes o hay algo más que quieras agregar, ¡dímelo!