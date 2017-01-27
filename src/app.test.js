const it = require('tape');
const server = require('../src/server');

it('checks the server is running', (t) => {
  server.start((err) => {
    if (err) {
      t.error(err);
    } else { t.pass('PASS: Server is running'); }
    server.stop();
    t.end();
  });
});

it(`checks the '/' route`, (t) => {
  const options = {
    method: 'GET',
    url:'/',
  };
  server.inject(options, (response) => {
    t.equal(response.statusCode, 200, `PASS: You received a 200 status code for '/' route`);
    t.end()
  });
});
