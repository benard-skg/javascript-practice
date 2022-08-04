// setInterval(() => {
//     console.log('1');
// }, 2000);

console.log(`\nRunning ${__filename} ....`);

const myDetails = require('./my-module');
const fileData = require('./page');
const sayHi = require('./utils');
const greet = require('./utils');
const tgs = require('./lists/teams');

console.log(`Executing from ${__filename} ....`);

// Info from the test file we read from in page.js
console.log(`Read from hello.txt : ` + fileData.txt);

// console.log(myDetails);

console.log(sayHi(myDetails.name));

console.log('League Top Goal Scorer : ' + tgs.topGoalScorer);

console.log(`Done: Exiting ${__filename} ....`);
