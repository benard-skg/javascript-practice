
// Reading from files via the fs module

const fs = require('fs');

const txt = fs.readFileSync('./hello.txt', 'utf-8');

console.log(`Executing from ${__filename} ....`);

module.exports = {txt};

console.log(`Done: Exiting ${__filename} ....`);