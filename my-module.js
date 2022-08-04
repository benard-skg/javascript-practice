// Sharing data accross files

// Not shared
const PASSWORD = '12345';
const BANK_DETAILS = {
    id : 121345,
    accNr : 500587,
    balance : 560
}

// Shared
const name = 'Sewela';
const age = 35;

console.log(`Executing from ${__filename} ....`);

module.exports = {
    name,
    age,
}

console.log(`Done: Exiting ${__filename} ....`);