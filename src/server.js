const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
// const buildDonations = require('getDonations');
const request = require('request');

const routes = [
  {
    method: 'GET',
    path: '/{file*}',
    handler: {
      directory: {
        path: 'public'
      }
    }
  },
  {
    method: 'GET',
    path: '/results',
    handler: (req, reply) => {
      let context = {};

      const options = {
        url: 'https://api.justgiving.com/01a8c56b/v1/charity/13441/donations',
        headers: {
          'Content-Type': 'application/json' }
        };

        function callback(error, response, body) {
          resultsObj = JSON.parse(body);
          results = resultsObj.donations;
          context.name = results.map(function(a) { return a.donorDisplayName;});
          context.amounts = results.map(function(a) { return a.amount;});
          context.messages = results.map(function(a) { return a.message;});
          console.log('This is the callback function:');
          console.log(`Donor: ${context.name[0]}, Amount donated: £${context.amounts[0]}, Message: ${context.messages[0]}`);
          buildView();
        };

        function buildView (context) {
          console.log('This is the buildView function:');
          console.log(`The entire context object: ${context}`);
          reply.view('index', context);
        }
        request(options, callback);
      }
    }
    ];

    const server = new Hapi.Server();

    server.connection({
      host: 'localhost',
      port: process.env.PORT || 8080
    });

    server.register([Vision, Inert], err => {
      if (err) throw err;

      server.views({
        engines: {
          hbs: require('handlebars')
        },
        relativeTo: __dirname,
        path: '../views',
        layoutPath: '../views/layout',
        layout: 'default'
      });

      server.route(routes);
    });

    module.exports = server;
