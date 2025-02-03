// sw.js
const CACHE_NAME = 'app-cache-v1';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/pages/biblia.html',
    '/pages/capitulos.html',
    '/pages/versiculos.html',
    '/css/styles.css',
    '/data/livros.json',
    '/data/capitulos.json',
    '/data/versiculos.json'
];

// Instalação do Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// Ativação do Service Worker
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Interceptação de Requisições
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});