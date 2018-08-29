const api = require('./routes/api.js')
const request = require('supertest');

request(api)
  .get('/user')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end(function(err, _) {
    if (err) throw err;
  });
