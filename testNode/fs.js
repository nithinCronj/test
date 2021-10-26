var fs = require('fs');

fs.writeFile('fscreate.txt', 'Check for updates and updates', function (err) {
  if (err) throw err;
  console.log('Updated!');
});