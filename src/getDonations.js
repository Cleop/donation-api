const request = require('request');
let donationData = {};

const options = {
  url: 'https://api.justgiving.com/01a8c56b/v1/charity/13441/donations',
  headers: {
    'Content-Type': 'application/json' }
  };

  function callback(error, response, body) {
    checkStatusCode(response);
    resultsObj = JSON.parse(body);
    results = resultsObj.donations;
    donationData.name = results.map(function(a) { return a.donorDisplayName;});
    donationData.amounts = results.map(function(a) { return a.amount;});
    donationData.messages = results.map(function(a) { return a.message;});
    console.log(donationData.amounts, donationData.messages, donationData.name);
  };

  console.log(donationData.name);

  function checkStatusCode (error, response) {
    if (!error && response.statusCode == 200) {
      console.log(response.statusCode);
      return response.statusCode;
    } else {
      return `Error: response statusCode`;
    }
  };


const callAPI = request(options, callback);

  module.exports = {
    callAPI: callAPI,
    callback : callback,
    donationData : donationData
  }
