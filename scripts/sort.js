const fs = require('fs');

const filename = 'vocab.txt';

fs.readFile(filename, 'utf8', (err, data) => {
  if (err) throw err;
  const lines = data.trim().split('\n');
  const sortedLines = lines.sort((a, b) => a.localeCompare(b, 'vi'));
  fs.writeFile(filename, sortedLines.join('\n'), (err) => {
    if (err) throw err;
  });
});
