// Copies the fonts from node_modules into www/ so the app works offline,
// and writes the Google Play Giochi leaderboard ID from native-config.json into the game.
const fs = require('fs'), path = require('path');
const nm = p => path.join(__dirname, '..', 'node_modules', p);
const www = p => path.join(__dirname, '..', 'www', p);
for (const [pkg, fam] of [['@fontsource/gluten', 'gluten'], ['@fontsource/nunito', 'nunito']]) {
  for (const w of [600, 800]) {
    const f = `${fam}-latin-${w}-normal.woff2`;
    fs.copyFileSync(nm(`${pkg}/files/${f}`), www(`fonts/${f}`));
  }
}
const cfg = require('../native-config.json');
const file = www('index.html');
let html = fs.readFileSync(file, 'utf8');
if (cfg.androidLeaderboardId) html = html.replace('CgkI_INSERIRE_ID', cfg.androidLeaderboardId.trim());
if (cfg.androidChallengeLeaderboardId) html = html.replace('CgkI_INSERIRE_SFIDA', cfg.androidChallengeLeaderboardId.trim());
fs.writeFileSync(file, html);
console.log('www ready');
