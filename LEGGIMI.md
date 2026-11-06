# Mucchio di Gatti - progetto Android e iPhone

Il gioco (`www/index.html`) diventa un'app con Capacitor, uguale su Android e iPhone.

- `.github/workflows/build-apk.yml`: a ogni caricamento GitHub compila l'APK Android e lo pubblica in "Releases".
- `.github/workflows/prova-iphone.yml`: avvio manuale, verifica che l'app iPhone si compili (simulatore, senza account Apple).
- `keystore/debug.keystore`: chiave fissa di prova, cosi' ogni nuovo APK si installa sopra il precedente senza perdere il record.
- `native-config.json`: i due ID di Google Play Giochi (progetto e classifica). Appena sono compilati, l'APK include le classifiche.

Componenti usati (quelli standard per i giochi fatti con Capacitor):
- Salvataggi: @capacitor/preferences (record, audio, Premium)
- Vibrazione: @capacitor/haptics
- Schermo intero: @capacitor/status-bar
- Acquisto Premium: cordova-plugin-purchase (Google Play e App Store)
- Classifiche: @openforge/capacitor-game-connect (Google Play Giochi e Game Center)
- Pubblicita': da collegare in seguito con @capacitor-community/admob


## Classifiche Google Play Giochi (prova)

Impronta SHA-1 della chiave di firma (serve per le credenziali OAuth Android):
A9:2E:61:A6:9C:6D:0E:7F:A7:03:D1:90:7C:1B:3E:1E:B2:4C:C3:D5
Nome pacchetto: it.gianmarco.mucchiodigatti
