const server = require('./src/server.js');

server.start((err) => {
  if (err) throw err;
  console.log('Server running is on http://localhost:8080');
});
