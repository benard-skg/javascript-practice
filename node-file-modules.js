
// Callbacks in file processing

const { readFile, writeFile } = require('fs');

readFile('./hello.txt', 'utf8', (err, result) =>{
  if(err){
	console.log(err);
	return;
  }
	const first = result;
	readFile('./goal-scorers.txt', 'utf8', (err, result) =>{
		if(err){
			console.log(err);
			return;
		}
		const second = result;
		writeFile('./result-fs.txt', `Contents of files : \n${first} and \n ${second} ...`, (err, result) =>{
			if(err){
				console.log(err);
				return;
			}
			console.log('Done with operations ...');
		});
	});
});

console.log(`Done operations in ${__filename} ...`);
