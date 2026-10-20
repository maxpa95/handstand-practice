# Handstand Practice — Casa V2.1

Programma e diario installabile sul telefono, utilizzabile anche offline dopo il primo caricamento.

Apri **https://maxpa95.github.io/handstand-practice/**.

## Sul telefono

- Android / Chrome: menu ⋮ → **Installa app**, oppure **Aggiungi alla schermata Home**.
- iPhone / Safari: **Condividi → Aggiungi alla schermata Home**; abilita Apri come app web se disponibile.
- Se l’icona esiste già, chiudi e riapri mentre sei online. La nuova versione si riconosce da **Casa V2.1**. Se necessario ricarica la pagina.

## Diario e trasferimento

Il diario resta nel browser/dispositivo. L’app pubblica parte senza sedute personali incorporate.

Al primo aggiornamento recupera gli archivi V3, PPL e Casa presenti sullo stesso sito; mantiene le vecchie memorie e archivia una bozza V3 aperta senza trasformarla in una seduta conclusa. Uno stato Casa V2 già presente ha precedenza.

Per trasferire il backup da un altro dispositivo: invia il JSON al telefono, apri **Dati**, attiva **Ripristina anche impostazioni e bozza** se vuoi continuare esattamente da quel punto e usa **Importa backup**. Il ripristino completo richiede che non ci sia una seduta aperta. L’importazione senza ripristino unisce i record senza duplicarli. Non c’è sincronizzazione automatica fra PC e telefono.

## Versione 2.1 — 20 ottobre 2026

- Modalità handstand selezionabili direttamente, con requisiti mancanti spiegati nello stesso punto.
- Risultati sotto l’esercizio, conferma tecnica rapida e rivalutazione del livello attuale.
- Sequenze distinte dalle singole transizioni e prossimi passi visibili.
- Sedute M3 complete/parziali per fase, calendario di sei settimane e proposta del retest.
- Cache aggiornata e navigazione online che recupera la versione attuale, con fallback offline.

## File pubblici

- `index.html`: applicazione autonoma Casa V2.1; nessun backup personale incorporato.
- `manifest.webmanifest`, `icon-192.png`, `icon-512.png`: installazione e icone.
- `sw.js`: app shell offline. La cache è limitata a questa app; un aggiornamento non cancella il diario.

GitHub Pages pubblica il branch `main`, cartella root. Per gli aggiornamenti, sostituire insieme app shell e service worker e assegnare una nuova versione alla cache.
