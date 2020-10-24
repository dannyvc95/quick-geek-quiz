/**
 * Basic and just demostrative unit test mock for the Quiz API endpoints.
 * 
 * @author Daniel Valle
 */

const assert = require('assert');
const request = require('supertest');
const app = require('../index');

describe('api endpoints', () => {
  // test Hello, World endpoint
  it('handles GET request /', done => {
    request(app)
      .get('/')
      .end((err, response) => {
        assert(response.text === '<h1>Hello, World</h1>');
        done();
      });
  });
  // test a valid questions amount
  it('handles GET request /api/v1/quiz/1 for valid scenario', done => {
    request(app)
      .get('/api/v1/quiz/1')
      .end((err, response) => {
        assert(response.status === 200);
        done();
      });
  });
  // test an invalid questions amount
  it('handles GET request /api/v1/quiz/x for invalid scenario', done => {
    request(app)
      .get('/api/v1/quiz/x')
      .end((err, response) => {
        assert(response.status === 400);
        assert(response.text === 'questions amount must be between 1 and 40');
        done();
      });
  });
  // test an invalid questions amount
  it('handles GET request /api/v1/quiz/51 for invalid scenario', done => {
    request(app)
      .get('/api/v1/quiz/51')
      .end((err, response) => {
        assert(response.status === 400);
        assert(response.text === 'questions amount must be between 1 and 40');
        done();
      });
  });
});