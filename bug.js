const http = require('http');

const server = http.createServer((req, res) => {
  // This will cause an error if the request takes too long to process
  // and the request event listener is not removed.
  req.on('data', chunk => {
    // Simulate a long process
    const start = Date.now();
    while(Date.now() - start < 5000); // Keep CPU busy for 5 seconds 
    console.log('Received chunk:', chunk.toString());
  });

  req.on('end', () => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});