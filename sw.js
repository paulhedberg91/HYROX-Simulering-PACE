// Enkel offline-cache så att tidtagningen fungerar även om gymmets wifi strular.
const CACHE = 'pace-hyrox-v8';
const FILES = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png', './assets/pace.png', './assets/bjornborg.jpg', './assets/kraftmark.jpg', './assets/ramudden.jpg', './assets/nocco.jpg', './assets/toveks.jpg', './assets/hajen.jpg', './sponsorer.html', './assets/zup.jpg', './pass.html'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  // nätverket först, cachen som reserv
  e.respondWith(fetch(e.request).then(r => {
    if (r.ok && new URL(e.request.url).origin === location.origin) { const c = r.clone(); caches.open(CACHE).then(cc => cc.put(e.request, c)); }
    return r;
  }).catch(() => caches.match(e.request)));
});
