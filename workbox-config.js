module.exports = {
  globDirectory: 'build/', // Directorio donde están los archivos generados después de la compilación
  globPatterns: [
    '**/*.{js,css,html,png,jpg,svg}', // Almacenar archivos como JS, CSS, imágenes, etc.
  ],
  swSrc: 'public/firebase-messaging-sw.js', // Ruta del archivo fuente del service worker
  swDest: 'build/firebase-messaging-sw.js', // Genera el service worker compilado en la carpeta build
  maximumFileSizeToCacheInBytes: 4 * 1024 * 1024, // Máximo 4MB por archivo
};