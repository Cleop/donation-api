const Hapi = require('hapi');
const Inert = require('inert');

const defaultRoute = {
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: './public'
    }
  }
};

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: process.env.PORT || 8080
});

server.register(Inert, (registerError) => {
  server.route(defaultRoute);
});

module.exports = server;
