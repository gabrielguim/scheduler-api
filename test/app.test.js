const app = require('../server.js');
const request = require('supertest');

request(app)
  .get('/api')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end(function(err, _) {
    if (err) throw err;
  });
