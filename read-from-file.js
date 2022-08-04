const { readFileSync, writeFileSync } = require('fs');

// const myFile = readFileSync('./hello.txt', 'utf-8');

const nameClient = '{name : "Dineo", age : 25, contact: "dinny@email.com"}';

writeFileSync('./hello.txt', nameClient, {flag: 'a'});

const myFile = readFileSync('./hello.txt', 'utf8');

console.log(myFile);
