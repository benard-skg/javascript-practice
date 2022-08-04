const http = require('http');

const server = http.createServer((request, response) => {
	// Basic routing example
	if(request.url === '/'){
		response.end(`<h3> Welcome to my homepage </h3>`);
	}

	if(request.url === '/about'){
		response.end(`<h3> About our company </h3>`);
	}

	if(request.url === '/contact'){
		response.end(`<h3> Our contact info </h3>`);
	}
});

server.listen(5000, ()=> { 
	console.log('Listening on port 5k !!!');
});
