const it = require('tape');
const server = require('../src/server');

it('checks the server is running', (t) => {
  server.start((err) => {
    if (err) {
      t.error(err);
    } else { t.pass('Server is running'); }
    server.stop();
    t.end();
  });
});
