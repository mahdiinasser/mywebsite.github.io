const cacheName = 'cache-v1';
const resourcesToPrecache = [
    '/',
    'index.html',
    'icon.png',
    'notification.js'
];

self.addEventListener('install', event => {
    console.log('Service Worker instal event!');
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                return cache.addAll(resourcesToPrecache);
            })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
        return Promise.all(
        cacheNames.filter (cacheName => {
            }).map(cacheName => {
               return caches.delete(cacheName);
            }) 
            );
        })
    );    
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.match(event.request)
        .then(cachedResponse => {
            return cachedResponse || fetch(event.request);
        })
    );
});

self.addEventListener('notificationclose', event => {
    var notification = event.notification;
    var primaryKey = notification.data.primaryKey;
    console.log('Closed Notification: ' + primaryKey);
});

self.addEventListener('notificationclick', function(event){
    var notification = event.notification;
    notification.close();
});

self.addEventListener('push', function(e){
    var title = e.data.text();
    e.waitUntil(
        self.ServiceWorkerRegistration.showNotification(title) 
    );
});

