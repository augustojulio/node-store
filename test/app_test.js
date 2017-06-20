const request = require('supertest');
const assert = require('assert');

const app = require('../app.js');

describe('GET /', () => {
  it('should return 200', (done) => {
    request(app)
      .get('/')
      .expect(200, done)
  });
});

describe('GET /:productCode', () => {
  it('should show a product', (done) => {
    request(app)
      .get('/1')
      .expect(200, done)
  });
});

describe('DB instance', () => {
  it('should save item to db', (done) => {
    request(app)
      .post('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  });

  it('should remove item', (done) => {
    request(app)
      .delete('/2')
      .expect('Content-Type', /json/)
    done()
  });

  it('should update an item', (done => {
    request(app)
      .put('/3')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      done()

  }))
});
