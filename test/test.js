var assert = require('assert');
var util = require('util');
var request = require('request');

var testAppUrl = process.env.APPURL;
var myrequest = request.defaults({
  baseUrl: testAppUrl,
  method: 'GET',
  json: true,
  gzip: true,
  timeout: 2000,
  time:true
});

describe('CRUDL tester', function() {
  describe('setup', function() {
    it('should have APPURL environment variable defined', function() {
      assert.ok(testAppUrl);
    });
  });
  describe('list', function() {
    it('should return something for GET', function(done) {
      myrequest({
        url: '/',
        method: 'GET'
      }, function (err, res, body) {
        assert.ok(!err, 'err returned' + util.inspect(err));
        assert.ok(res, 'response should be defined');
        assert.ok(200, res.statusCode, 'unexpected statusCode');
        done();
      });
    });
  });
});
