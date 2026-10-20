const CACHE_NAME='handstand-practice-casa-v2.1-20261020';
const PREFIX='handstand-practice-';
const ROOT=new URL('./',self.registration.scope).href;
const INDEX=new URL('index.html',ROOT).href;
const APP_SHELL=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'].map(p=>new URL(p,ROOT).href);
self.addEventListener('install',event=>{event.waitUntil((async()=>{const cache=await caches.open(CACHE_NAME);await cache.addAll(APP_SHELL.map(url=>new Request(url,{cache:'reload'})));await self.skipWaiting();})());});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{for(const key of await caches.keys())if(key.startsWith(PREFIX)&&key!==CACHE_NAME)await caches.delete(key);await self.clients.claim();})());});
self.addEventListener('fetch',event=>{
 const request=event.request,url=new URL(request.url);
 if(request.method!=='GET'||url.origin!==self.location.origin||!url.href.startsWith(ROOT))return;
 if(request.mode==='navigate'&&(url.pathname===new URL(ROOT).pathname||url.pathname===new URL(INDEX).pathname)){
  event.respondWith((async()=>{const cache=await caches.open(CACHE_NAME);try{const response=await fetch(new Request(request,{cache:'no-store'}));if(!response.ok)throw Error('Page unavailable');await cache.put(INDEX,response.clone());return response;}catch(e){return await cache.match(INDEX)||await cache.match(ROOT)||Response.error();}})());return;
 }
 if(APP_SHELL.includes(url.href))event.respondWith((async()=>{const cache=await caches.open(CACHE_NAME),cached=await cache.match(request);if(cached)return cached;const response=await fetch(request);if(response.ok)await cache.put(request,response.clone());return response;})());
});
