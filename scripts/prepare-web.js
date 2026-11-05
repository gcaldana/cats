// Copies the fonts from node_modules into www/ so the app works offline.
const fs = require('fs'), path = require('path');
const nm = p => path.join(__dirname, '..', 'node_modules', p);
const www = p => path.join(__dirname, '..', 'www', p);
for (const [pkg, fam] of [['@fontsource/gluten', 'gluten'], ['@fontsource/nunito', 'nunito']]) {
  for (const w of [600, 800]) {
    const f = `${fam}-latin-${w}-normal.woff2`;
    fs.copyFileSync(nm(`${pkg}/files/${f}`), www(`fonts/${f}`));
  }
}
console.log('www ready');
