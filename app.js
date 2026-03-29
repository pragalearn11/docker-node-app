const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from Docker DevOps - CI CD PIPELINE!');
});

server.listen(3000,"0.0.0.0", () => {
  console.log('Server running on port 3000');
});

