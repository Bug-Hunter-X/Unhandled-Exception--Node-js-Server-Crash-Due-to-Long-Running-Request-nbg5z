const http = require('http');

const server = http.createServer((req, res) => {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });

  // Set a timeout for the request
  const timeoutId = setTimeout(() => {
    req.destroy(); //destroy request after timeout
    res.writeHead(408, { 'Content-Type': 'text/plain' });
    res.end('Request Timeout');
  }, 1000); // Set timeout to 1 second

  req.on('end', () => {
    clearTimeout(timeoutId);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});