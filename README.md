# Handstand Practice PWA

Questa cartella è pronta per essere pubblicata come sito statico (per esempio con GitHub Pages) e installata come PWA su Android/Chrome.

## File

- `index.html` — il programma originale, con soli metadati PWA e registrazione del service worker aggiunti.
- `manifest.webmanifest` — nome, icone e modalità standalone.
- `sw.js` — cache dell'app shell per l'uso offline.
- `icon-192.png`, `icon-512.png` — icone Android/PWA.

## Pubblicazione su GitHub Pages

1. Crea un repository, ad esempio `handstand-practice`.
2. Carica **il contenuto di questa cartella** nella root del repository.
3. In GitHub vai in **Settings → Pages**.
4. Scegli **Deploy from a branch**, branch `main`, cartella `/ (root)`.
5. Apri l'indirizzo `https://TUO-UTENTE.github.io/handstand-practice/` in Chrome sul Pixel.
6. Dal menu di Chrome usa **Installa app** / **Aggiungi alla schermata Home**.

## Dati del diario

Il diario usa `localStorage`: resta locale al browser/dispositivo. Per trasferire i dati fra PC e telefono usa **Esporta backup JSON** e **Importa backup JSON** già presenti nell'app.

## Aggiornamenti futuri

Se modifichi `index.html`, cambia anche `CACHE_NAME` in `sw.js` (per esempio da `...-v1` a `...-v2`) così Chrome scarica subito la nuova versione dell'app.
