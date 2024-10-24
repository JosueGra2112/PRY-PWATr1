module.exports = {
  globDirectory: 'build/',
  globPatterns: [
    '**/*.{js,css,html,png,jpg,svg,pdf}',
  ],
  swSrc: 'public/firebase-messaging-sw.js',
  swDest: 'build/service-worker.js',
  maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // Aumenta el límite a 8MB
  globIgnores: [
    '**/Politicas_de_privacidad.*',
    '**/loghidalgo.*',
    '**/bundle.js',
  ],
};
