/* Service worker de Mis Audiolibros
   - La página (index.html) se pide primero a internet: así siempre llega la versión nueva.
   - Si no hay internet, se usa la copia guardada: la app funciona sin conexión.
   - Iconos y manifiesto se sirven desde la copia guardada. */
const CACHE = 'audiolibros-v5';
const ARCHIVOS = ['./', 'index.html', 'manifest.webmanifest', 'icon-180.png', 'icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(ARCHIVOS.map(u => c.add(u).catch(() => {})))));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(claves => Promise.all(claves.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const u = new URL(r.url);
  if (u.origin !== location.origin) return;          // carátulas de internet: no se tocan

  const esPagina = r.mode === 'navigate' || u.pathname.endsWith('/') || u.pathname.endsWith('.html');
  if (esPagina) {
    e.respondWith(
      fetch(r).then(resp => {
        const copia = resp.clone();
        caches.open(CACHE).then(c => c.put(r, copia));
        return resp;
      }).catch(() => caches.match(r).then(x => x || caches.match('index.html')))
    );
    return;
  }
  e.respondWith(
    caches.match(r).then(x => x || fetch(r).then(resp => {
      if (resp.ok) { const copia = resp.clone(); caches.open(CACHE).then(c => c.put(r, copia)); }
      return resp;
    }))
  );
});
